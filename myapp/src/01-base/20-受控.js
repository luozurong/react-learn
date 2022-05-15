import React, { Component } from 'react'

export default class App extends Component {
  state = {
    username: 'lzr'
  }
  render () { 
    return (
      <div>
        <h1>登陆页</h1>
        <input type="text" value={this.state.username} onChange={(evt) => {
          console.log(evt.target.value)
          this.setState({
            username: evt.target.value
          })
        }}/>

        <button onClick={() => {
          
        }}>登陆</button>
        <button onClick={() => {
          this.setState({
            username: ''
          })
        }}>重置</button>

        {/* <Child myValue={this.state.username}/> */}
      </div>
    )
  }
}
/**
 * input 中的onInput 于 onChange 有什么区别
 */