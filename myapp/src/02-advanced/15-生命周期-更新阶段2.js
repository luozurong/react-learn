import React , {Component} from 'react'

export default class App extends Component {
  state = {
    myName: 2
  }
  render () {
    console.log('render')
    return (<div>
      <button onClick={() => {
        this.setState({
          myName: Math.random() * 10
        })
      }}>click</button>
      {this.state.myName}
    </div>)
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    //if (JSON.stringify(this.state.myName) < JSON.stringify(nextState.myName)) {
    if (JSON.stringify(this.state) < JSON.stringify(nextState)) {
      return true
    }
    return false
  }
  UNSAFE_componentWillUpdate () {
    console.log('UNSAFE_componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
}