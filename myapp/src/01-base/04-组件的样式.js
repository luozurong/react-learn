import React, { Component } from 'react'
import './css/01-index.css' // css引入 webpack支持

export default class App extends Component {
  render () {
    var myName = 'Nidia'
    var obj = {
      backgroundColor: 'red',
      fontSize: '30px'
    }
    return (
      <div>
        <div>{ 10 + 20 } - { myName }</div>
        <div>{ 10 > 20 ? 1 : 2 }</div>
        <div style={obj}>12</div>
        {/* React推荐我们使用行内样式，因为React觉得每一个组件都是一个独立的整体 */}
        <div style={{background: 'green'}}>123</div>
        <div className="active">333</div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username"/>
      </div>
    )
  }
}