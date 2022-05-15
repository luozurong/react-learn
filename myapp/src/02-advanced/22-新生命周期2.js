import React , {Component} from 'react'

export default class App extends Component {
  state = {
    myText: '11'
  }
  render () {
    console.log('render')
    return (<div>
      <button onClick={() => {
        this.setState({
          myText: '222'
        })
      }}>click</button>
      app - {this.state.myText}
    </div>)
  }
  componentDidUpdate (prevProps, prevState, value) {
    console.log('componentDidUpdate', value)
  }
  getSnapshotBeforeUpdate () {
    console.log('getSnapshotBeforeUpdate')
    return 100
  }
}