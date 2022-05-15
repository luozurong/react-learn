import React , {Component} from 'react'

class Child extends Component {
  state = {
    title: ''
  }
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', nextProps)
    // 最先获得父组件传来的属性，利用属性精心aixos或者逻辑处理啊
    // 把属性转化为孩子自己的状态

    this.setState({
      title: nextProps.text
    })
  }
  render() {
    return (<div>
      child-{this.props.text} - {this.state.title}
    </div>)
  }
}
export default class App extends Component {
  state = {
    text: 11
  }
  render () {
    return (<div>
      {this.state.text}
      <button onClick={() => {
        this.setState({
          text: 222
        })
      }}>onClick</button>
      <Child text={this.state.text}/>
    </div>)
  }
}