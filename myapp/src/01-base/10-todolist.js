import React, { Component } from 'react'
// import './css/01-index.css'

export default class App extends Component {
  a = 100
  myref = React.createRef()
  state = {
    list: [{
      id: 1,
      text: 222
    }]
  }
  render () {
    return (
      <div>
        <input ref={this.myref} />
        <button onClick={ this.handleClick2 }>add2</button>
        <ul>
          {this.state.list.map((item, index) => 
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => this.handleClick(index)}>del</button>
            </li>
          )}
        </ul>
        {/* {this.state.list.length ? null : <div>暂无待办事项</div>} */}
        {!this.state.list.length && <div>暂无待办事项</div>}
        {/* <div className={this.state.list.length !== 0 ? 'hidden' : ''}>暂无待办事项</div> */}
        {/* <span dangerouslySetInnerHTML={
          {__html: '23'}
        }></span> */}
      </div>
    )
  }
  handleClick2 = () => {
    if (!this.myref.current.value) return false
    let list = [...this.state.list]
    list.push({
      id: Math.random() * 10000000,
      text: this.myref.current.value
    })
    this.setState({
      list: list
    })

    // 清空输入框
    this.myref.current.value = ''
  }
  handleClick (index) {
    // let newList = this.state.list.slice()
    let newList = this.state.list.concat()
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }
}