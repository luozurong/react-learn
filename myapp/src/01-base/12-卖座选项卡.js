import React, { Component } from 'react'
import './css/01-index.css'

import Film from './maizuocomponent/film组件'
import Cinema from './maizuocomponent/cinema组件'
import Center from './maizuocomponent/center'

export default class App extends Component {
  state = {
    current: 1
  }
  render () {
    return (
      <div>
        {/* {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Cinema></Cinema>}
        {this.state.current === 2 && <Center></Center>} */}
        {this.which()}
        <ul>
          {this.state.list.map((item, index) => 
            <li key={item.id}
              onClick={() => this.handleClick(index)}
              className={index === this.state.current ? 'actives': ''}>
                {item.text}
            </li>
          )}
        </ul>
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
         return 11
    }
  }
  handleClick (index) {
    this.setState({
      current: index
    })
  }
}