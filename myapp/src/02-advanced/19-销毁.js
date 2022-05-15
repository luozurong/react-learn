import React , {Component} from 'react'

export default class App extends Component {
  state = {
    isCreated: true
  }
  render () {
    return (<div>
      <button onClick={() => {
        this.setState({
          isCreated: !this.state.isCreated
        })
      }}>click</button>
      {this.state.isCreated ? <Child></Child> : ''}
    </div>)
  }
}

class Child extends Component {
  componentDidMount () {
    window.onresize = () => {
      console.log('onresize')
    }
    this.timer = setInterval(() => {
      console.log(11)
    }, 5000)
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
    // 窗口大小的监听
    window.onresize = null
    clearInterval(this.timer)
  }
  render () {
    return (<div>
      child
    </div>)
  }
}