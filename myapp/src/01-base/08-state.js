import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myText: 'React',
    myShow: false,
    myName: 'lzr'
  }
  render () { 
    return (
      <div>
        <h1>欢迎来到{this.state.myText}的开发-{this.state.myName}</h1>
        <button onClick={() => {
          this.setState({
            myShow: !this.state.myShow,
            myName: 'hmc'
          })
        }}>{!this.state.myShow ? '收藏' : '取消收藏'}</button>
      </div>
    )
  }
}
/**
 * key 为了列表的复用和重排， 设置key值提高性能
 * 理想值key, item.id
 * 不是增删的时候，设置index也是可以的
 */