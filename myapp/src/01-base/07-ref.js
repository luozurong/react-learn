import React, { Component } from 'react'

export default class App extends Component {
  a = 100
  myref = React.createRef()
  render () {
    return (
      <div>
        {/* <input ref="mytext" /> */}
        {/* <button onClick={ () => { console.log('click1', this.refs.mytext.value) } }>add1</button> */}
        <input ref={this.myref} />
        <button onClick={ () => { console.log('click1', this.myref.current.value) } }>add1</button>
        <button onClick={ this.handleClick2 }>add2</button>
      </div>
    )
  }
  handleClick2 = () => {
    console.log('click2', this.myref.current)
  }
}