import React, { Component } from 'react'

/**
 * 函数式组件
 */
const Child = () => {
  return <div>child</div>
}

class Navbar extends Component {
  render () {
    return <div>navabar
      <Child></Child>
    </div>
  }
}

class Swiper extends Component {
  render () {
    return <div>swiper</div>
  }
}

class Tabbar extends Component {
  render () {
    return <div>tabbar</div>
  }
}
export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}