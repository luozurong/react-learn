import React , {Component} from 'react'

class Box extends Component {
  // 性能优化很关键
  shouldComponentUpdate (nextProps) {
    if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
      return true
    }
    return false
  }
  render () {
    console.log('render')
    return (<div style={{width: '100px', 
      height: '100px', 
      border: this.props.current !== this.props.index ? '1px solid gray' : '1px solid red', 
      margin: '10px', 
      float: 'left'}}>
    </div>)
  }
}

export default class App extends Component {
  state = {
    list: [0,1,2,3,4,5,6,7,8,9,10],
    current: 0
  }
  render () {
    return (<div>
      <input type="number" onChange={(evt) => {
        this.setState({
          current: Number(evt.target.value)
        })
      }} value={this.state.current}></input>

      <div style={{overflow: 'hidden'}}>
        {
          this.state.list.map((item, index) => <Box key={item} 
          current={this.state.current} 
          index={index}></Box>)
        }
      </div>
    </div>)
  }
}