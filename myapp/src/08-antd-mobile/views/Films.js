import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Nowplaying from './films/NowPlaying'
import Comingsoon from './films/Comingsoon'

import {Swiper, Tabs} from 'antd-mobile'

import './components/Tabbar'
import style from './css/Film.module.css'
import axios from 'axios'

export default class Films extends React.Component {
  state = {
    loopList: []
  }
  componentDidMount () {
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=110100&k=1929750',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res)
      this.setState({
        loopList: res.data.data
      })
    })  
  }
  render () {
    return (
      <div  className={style.film + ' aaa'}>
        <Swiper allowTouchMove={false} autoplay allowTouchMove loop className={style.banner}>
          {
            this.state.loopList.map(item => <Swiper.Item key={item.bannerId}>
              <img src={item.imgUrl} alt={item.bannerId}></img>
            </Swiper.Item>)
          }

        </Swiper>

        <div style={{position: 'sticky', top: 0, zIndex: 1,background: '#fff'}}>
          <Tabs activeKey={this.props.location.pathname}
            onChange={(value) => {
            console.log(value)
            this.props.history.push(value)
          }}>
            <Tabs.Tab title='正在热映' key='/films/nowPlaying' />
            <Tabs.Tab title='即将上映' key='/films/comingson' />
          </Tabs>
        </div>

        <Switch>
          <Route path="/films/nowPlaying" component={Nowplaying}></Route>
          <Route path="/films/comingson" component={Comingsoon}></Route>
          <Redirect from="/films" to="/films/nowPlaying"/>
        </Switch>
      </div>
    )
  }
}