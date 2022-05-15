import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div>
        <input />
        <button onClick={ () => { console.log('click1', "如果内容处理过多，不适合用") } }>add1</button>
        <button onClick={ this.handleClick2 }>add2</button>
        <button onClick={ this.handleClick3 }>add3</button>
        {/* add4 推荐用 */}
        <button onClick={ () => { this.handleClick4() } }>add4</button>
      </div>
    )
  }
  // add2
  handleClick2 () {
    console.log('click2')
  }
  // add3
  handleClick3 = () => {
    console.log('click3')
  }
  // add4
  handleClick4 = () => {
    console.log('click4')
  }
}