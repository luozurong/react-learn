import React , {Component} from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    type: 1
  }
  render () {
    return (<div>
      <ul>
        <li onClick={() => {
          this.setState({
            type: 1
          })
        }}>正在热影</li>
        <li onClick={() => {
          this.setState({
            type: 2
          })
        }}>即将上映</li>
      </ul>

      <FiledList type={this.state.type}></FiledList>
    </div>)
  }
}

class FiledList extends Component {
  state = {
    list: []
  }
  componentDidMount () {
    console.log(this.props.type)
    if (this.props.type === 1) {
      // 正在热映
      this.getData1()
      console.log('正在热映')
    } else {
      // 正在上因
      this.getData2()
      console.log('正在上因')
    }
  }

  getData1 () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=8341002',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res)
      this.setState(
        {list: res.data.data.films}
      )
    })
  }
  getData2 () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=6327393',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res)
      this.setState(
        {list: res.data.data.films}
      )
    })
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    console.log(this.props.type)
    if (nextProps.type === 1) {
      // 正在热映
      console.log('正在热映')
      this.getData1()
    } else {
      // 正在上因
      console.log('正在上因')
      this.getData2()
    }
  }
  render () {
    return (<ul>
      {this.state.list.map(item => <li key={item.filmId}>{item.name}</li>)}
    </ul>)
  }
}