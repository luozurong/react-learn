import React , {Component} from 'react'
import { withRouter } from 'dva/router'
import request from '../utils/request'
export default class Center extends Component {
  render () {
    return (<div>
      <WithChild></WithChild>
    </div>)
  }
}

class Child extends Component {
  componentDidMount () {
    request('/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4').then((res) => {
      console.log(res)
    })

    request('/users').then(res => {
      console.log(res)
    })
  }
  render () {
    return (<div>
      <button onClick={() => {
        localStorage.setItem('token', '')
        console.log(this.props.history.push('/login'))
      }}>退出登陆</button>
    </div>)
  }
}

const WithChild = withRouter(Child)