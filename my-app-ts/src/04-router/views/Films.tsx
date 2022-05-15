import React , {Component} from 'react'
import axios from 'axios'
import {RouteComponentProps} from 'react-router-dom'
interface IItem {
  filmId: string,
  name: string,
  [propName: string]: any
}


export default class Film extends Component<RouteComponentProps, any> {
  state = {
    list: []
  }
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
  }
  render () {
    return (<div>
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