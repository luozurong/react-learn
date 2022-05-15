import React from 'react'
import axios from 'axios'

class Cinema extends React.Component {
  constructor () {
    super()
    this.state = {
      cinemaListCache: [],
      cinemaList: []
    }
    this.getAxios()
  }
  render () {
    return (
      <div>
        <input className="ipt" onInput={this.handleInput.bind(this)}/>
        <div>
          {
            this.state.cinemaList.map(item => (
              <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
            ))
          }
        </div>
      </div>
    )
  }
  // 获取数据请求
  getAxios () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2929620',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.setState({
        cinemaListCache: res.data.data.cinemas,
        cinemaList: res.data.data.cinemas
      })
      console.log('1', this.state.cinemaList)
    })
  }
  // 输入数据
  handleInput (event) {
    console.log('input', event.target.value)
    let value = event.target.value
    if (!value) return false

    let cinemaList = this.state.cinemaListCache.filter(item => item.name.includes(value.toUpperCase()))
    this.setState({
      cinemaList: cinemaList
    })
    console.log(this.state.cinemaList)
  }
}

export default Cinema