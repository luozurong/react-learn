import React from 'react'

class App extends React.Component {
  state = {
    myName: 'myname'
  }
  UNSALFE_componentWillMount () {
    // 初始化数据 ****

    console.log('第一次 will mount')
    // 上树前的最后一次修改状态的机会
    this.setState({
      myName: 'lzr'
    })
  }

  componentDidMount () {
    console.log('第一次 did mount', document.getElementById('name'))
    // 数据请求
    // 订阅函数的调用
    // setInterval
    // 基于创建完dom进行初始化Betterscroll
  }
  render () {
    console.log('render')
    return (
      <div>
        <span id="name">{this.state.myName}</span>
      </div>
    )
  }
}

export default App