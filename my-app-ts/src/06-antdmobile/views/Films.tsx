import React , {Component} from 'react'
import axios from 'axios'
import {RouteComponentProps} from 'react-router-dom'
import {Button, Swiper} from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
interface IItem {
  filmId: string,
  name: string,
  [propName: string]: any
}

export default class Film extends Component<RouteComponentProps, any> {
  state = {
    list: [],
    loopList: []
  }
  myref = React.createRef<SwiperRef>()
  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=896043',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.setState({
        list: res.data.data.films
      })
    })

    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=110100&k=242844',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log('22222',res.data.data)
      this.setState({
        loopList: res.data.data
      })
    })
  }
  render () {
    return (<div>
      <Swiper loop
        ref={this.myref}>
        {
          this.state.loopList.map((item: any) => 
            <Swiper.Item key={item.bannerId}>
              <img src={item.imgUrl} alt={item.bannerId} style={{width: '100%'}}/>
            </Swiper.Item>)
        }
      </Swiper>
      
      <Button color="danger" onClick={() => {
        this.myref.current?.swipeNext()
      }}>上一个</Button>
      <Button color="primary" onClick={() => {
        this.myref.current?.swipePrev()
      }}>下一个</Button>

      <ul>
        {
          this.state.list.map((item: IItem) => <li 
          onClick={() => {
            console.log(this.props.history)
            this.props.history.push('/detail/'+item.filmId)
          }}
          key={item.filmId}>{item.name}</li>)
        }
      </ul>
    </div>)
  }
}