import React , {Component, useEffect, useLayoutEffect} from 'react'

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

function Child () {
  useLayoutEffect(() => {
    window.onresize = () => {
      console.log('onresize')
    }
    let timer = setInterval(() => {
      console.log(11)
    }, 5000)

    return () => {
      console.log('组件销毁')
      window.onresize = null
      clearInterval(timer)
    }
  }, [])
  return (<div>
    child
  </div>)
}