import React, { Component } from 'react'
import Navbar from './navbar'
export default class App extends Component {
  render () { 
    let obj = {
      title: '测试',
      leftShow: false
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" leftShow={false}/>
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title="列表"/>
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar title="购物车"/>
        </div>
        <Navbar {...obj}/>
      </div>
    )
  }
}
