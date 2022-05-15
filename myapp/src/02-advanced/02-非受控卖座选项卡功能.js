import React, { Component } from 'react'
import './css/01-index.css'

import Film from './maizuocomponent/film组件'
import Cinema from './maizuocomponent/cinema组件'
import Center from './maizuocomponent/center'

import Tabbar from './maizuocomponent/tabbar'
import Navibar from './maizuocomponent/navibar'

export default class App extends Component {
  state = {
    current: 1
  }
  render () {
    return (
      <div>
        <Navibar myEvent={() => {
          console.log(11)
          this.setState({
            current: 2
          })
        }}></Navibar>

        {this.which()}

        <Tabbar myEvent={(index) => {
          console.log('组件定义', index)
          this.setState({
            current: index
          })
        }} defaultValue={this.state.current}/>
      </div>
    )
  }
  which () {
    switch(this.state.current) {
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>
      default:
         return 1
    }
  }
}