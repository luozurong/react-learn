import React, { Component } from 'react'
import './css/01-index.css'

import Film from './maizuocomponent2/film组件'
import Cinema from './maizuocomponent2/cinema组件'
import Center from './maizuocomponent2/center'

import Tabbar from './maizuocomponent2/tabbar'
import Navibar from './maizuocomponent2/navibar'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: '电影'
      },
      {
        id: 2,
        text: '影院'
      },
      {
        id: 3,
        text: '我的'
      }
    ],
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

        <Tabbar list={this.state.list}
          current={this.state.current}
          myEvent={(index) => {
            console.log('组件定义', index)
            this.setState({
              current: index
            })
        }}/>
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