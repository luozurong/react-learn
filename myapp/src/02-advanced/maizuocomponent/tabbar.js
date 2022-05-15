import React, {Component} from 'react'

export default class Tabbar extends Component {
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
    current: this.props.current
  }
  render () {
    return (
      <div>
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
  handleClick (index) {
    this.setState({
      current: index
    })

    this.props.myEvent(index)
  }
}