import React , {memo, Component} from 'react'

export default class App extends Component {
  state = {
    name: 'lzr',
    title: 'aaa'
  }
  render () {
    return (<div>
      {this.state.name}
      <button onClick={() => {
        this.setState({
          name: '小明',
          title: '222'
        })
      }}>click</button>

      <Child title={this.state.title}></Child>
    </div>)
  }
}

const Child = memo((props) => {
  console.log('child-111')
  return <div>{props.title}</div>
})