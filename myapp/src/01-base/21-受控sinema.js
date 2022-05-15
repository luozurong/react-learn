import React from 'react'
import axios from 'axios'

class Cinema extends React.Component {
  constructor () {
    super()
    this.state = {
      // cinemaListCache: [],
      cinemaList: [],
      myText: ''
    }
    this.getAxios()
  }
  render () {
    return (
      <div>
        <input value={this.state.myText} onChange={(evt) => {
          this.setState({
            myText: evt.target.value
          })
        }}/>
        <div>
          {
            this.getSinemaList().map(item => (
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
    })
  }
  getSinemaList () {
    return this.state.cinemaList.filter(item => item.name.includes(this.state.myText.toUpperCase()))
  }
}

export default Cinema