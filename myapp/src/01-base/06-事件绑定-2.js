import React, { Component } from 'react'

export default class App extends Component {
  a = 100
  render () {
    return (
      <div>
        <input />
        <button onClick={ () => { console.log('click1', "如果内容处理过多，不适合用", this.a) } }>add1</button>
        <button onClick={ this.handleClick2 }>add2</button>
        <button onClick={ this.handleClick2.bind(this) }>add2 bind</button>
        <button onClick={ this.handleClick3 }>add3</button>
        {/* add4 比较推荐用 */}
        <button onClick={ () => this.handleClick4() }>add4</button>
      </div>
    )
  }
  // add2 不推荐
  handleClick2 () {
    // this指向undefined
    // this通过bind 指向app实例
    console.log('click2', this)
  }
  // add3 推荐
  handleClick3 = (event) => {
    console.log('click3', this.a, event.target)
  }
  // add4 比较推荐
  handleClick4 () {
    console.log('click4', this.a)
  }

  /**
   * call 改变this指向 自动执行
   * apply 改变this指向 自动执行
   * bind 改变this指向 手动加（）执行
   * 
   * React并不会真正的绑定事件到每一个具体《》的元素上，而是采用事件代理的模式
   */
}