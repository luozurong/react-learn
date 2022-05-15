import React, { Component } from 'react'

class Child extends Component {
  render () { 
    return (
      <div>
        child-{this.props.text}
        <button onClick={() => {
          this.props.text = 11
        }}>子改props</button>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    text: 111
  }
  render () { 
    return (
      <div>
        <button onClick={() => {
          this.setState({
            text: Math.floor(Math.random() * 10000)
          })
        }}>改-父</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}
