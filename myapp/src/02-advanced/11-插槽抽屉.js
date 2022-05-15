import React from 'react'

class Navbar extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
        navibar
      </div>
    )
  }
}

class SideBar extends React.Component {
  render () {
    return (
      <div style={{background: '#f0f'}}>
        SideBar
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    isShow: true
  }
  handleEvent(indexs) {
    console.log('父组件定义的event事件', indexs)
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render () {
    return (
      <div>
        <Navbar>
          <button onClick={() => {
            this.setState({
              isShow: !this.state.isShow
            })
          }}>click</button>
        </Navbar>
        {/* <button onClick={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }}>click</button> */}
        {this.state.isShow && <SideBar/>}
      </div>
    )
  }
}
/**
 * 父传子：属性
 * 子传父： 函数回调
 */

export default App