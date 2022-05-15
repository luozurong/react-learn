import React , {Component} from 'react'

export default class App extends Component {
  state = {
    myName: 'lzr'
  }
  // componentWillMount 初始化
  static getDerivedStateFromProps (nextProps, nextState) {
    console.log('getDerivedStateFromProps')
    return {
      myName: nextState.myName.substring(0, 1).toUpperCase() + nextState.myName.substring(1)
    }
  }
  
  render () {
    return (<div>
      <button onClick={() => {
        this.setState({
          myName: 'xiaoming'
        })
      }}>click</button>
      app - {this.state.myName}
    </div>)
  }
}