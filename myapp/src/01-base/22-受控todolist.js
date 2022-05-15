import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  state = {
    list: [{
      id: 1,
      text: 111,
      isChecked: false
    },{
      id: 2,
      text: 222,
      isChecked: false
    }],
    myText: ''
  }
  render () {
    return (
      <div>
        <input value={this.state.text} onChange={(evt) => {
          this.setState({
            myText: evt.target.value
          })
        }}/>
        <button onClick={ this.handleClick2 }>add2</button>
        <div>
          {this.state.list.map((item, index) => 
            <div key={item.id}>
              <input type="checkbox" checked={item.isChecked} onChange={() => 
                this.handleChange(index)}>
              </input>
              <span style={{
                textDecoration: item.isChecked ? 'line-through' : ''
              }} dangerouslySetInnerHTML={{__html: item.text}}></span>
              <button onClick={() => this.handleClick(index)}>del</button>
            </div>
          )}
        </div>
        {/* {this.state.list.length ? null : <div>暂无待办事项</div>} */}
        {/* {!this.state.list.length && <div>暂无待办事项</div>} */}
        <div className={this.state.list.length !== 0 ? 'hidden' : ''}>暂无待办事项</div>
      </div>
    )
  }
  handleClick2 = () => {
    let list = [...this.state.list]
    list.push({
      id: Math.random() * 10000000,
      text: this.state.myText,
      isChecked: false
    })
    this.setState({
      list: list,
      myText: ''
    })
    
  }
  handleClick (index) {
    // let newList = this.state.list.slice()
    let newList = this.state.list.concat()
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }
  handleChange = (index) => {
    let newList = [...this.state.list]
    newList[index].isChecked = !newList[index].isChecked
    this.setState({
      list: newList
    })
  }
}