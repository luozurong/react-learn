import React, { Component } from 'react'

class Field extends Component{
  state = {
    value: ''
  }
  clear () {
    this.setState({
      value: ''
    })
  }
  setValue (value) {
    this.setState({
      value: value
    })
  }
  
  render () {
    return <div style={{background: 'yellow'}}>
      <label>
        {this.props.label}
        <input type={this.props.type}
          value={this.state.value}
          onChange={(evt) => {
            this.setState({
              value: evt.target.value
            })
          }}/>
      </label>
    </div>
  }
}
class App extends React.Component {
  username = React.createRef()
  password = React.createRef()

  state = {
    username: localStorage.getItem('username') || '',
    password: localStorage.getItem('password') || ''
  }
  render () {
    return (
      <div>
        <h1>登陆页面</h1>

        <Field label="用户名称" 
          value={this.state.username}
          type="text"
          ref={this.username}/>

        <Field label="用户密码" 
          value={this.state.password}
          type="password"
          ref={this.password}/>

        <button onClick={() => {
          console.log(this.username, this.username.current.state.value, this.password.current.state.value)
        }}>登陆</button>
        
        <button onClick={() => {
          this.username.current.clear()
          this.password.current.clear()
        }}>取消</button>
      </div>
    )
  }
}

export default App