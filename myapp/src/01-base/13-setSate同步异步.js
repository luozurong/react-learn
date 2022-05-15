import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }
  render () { 
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>add1</button>
        <button onClick={this.handleClick2}>add2</button>
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      // 状态和真实dom已经更新完了
      console.log(this.state.count)
    })
    
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })

    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })
  }

  handleClick2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)
    }, 0)
  }
}
/**
 * setState 处在同步的逻辑中 异步更新状态， 更新真实DOM
 * setState 处在异步的逻辑中 同步更新状态， 同步更新真实DOM
 * 
 * setState 接受第二个参数，第二个参数式回调函数，状态和dom更新完成就会触发
 */
