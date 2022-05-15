import React, { Component } from 'react'
import Navbar from './navbar'
import SideBar from './sideBar/index'
export default class App extends Component {
  render () { 
    return (
      <div>
          <Navbar title="导航" leftShow={false}></Navbar>
          {/* 函数式 */}
          <SideBar bg={1} fontSize="30px"></SideBar>
      </div>
    )
  }
}