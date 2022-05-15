import React , {Component} from 'react'
import {Map} from 'immutable'

export default class App extends Component {
  state = {
    info: Map({
      name: 'lzr',
      select: 110,
      filter: Map({
        text: '',
        up: true,
        down: false
      })
    })
  }
  componentDidMount () {
    console.log(this.state.info)
  }
  render () {
    return (<div>
      <button onClick={() => {
        this.setState({
          info: this.state.info.set('name', 'xiaoming').set('select', 21)
        })
      }}>click</button>
      app - {this.state.info.get('name')}
      <Child filter={this.state.info.get('filter')}/>
    </div>)
  }
}

class Child extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.filter === nextProps.filter) {
      return false
    }
    return true
  }
  componentDidUpdate () {

  }
  render () {
    return (<div>
      child
    </div>)
  }
}