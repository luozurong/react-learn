import React, { Component } from 'react'
class Field extends Component{
  render () {
    return <div style={{background: 'yellow'}}>
      <label>
        {this.props.label}
        <input type={this.props.type}
          value={this.props.value}
          onChange={(evt) => {
            console.log(evt.target.value)
            this.props.onChange(evt.target.value)
        }}/>
      </label>
    </div>
  }
}
class App extends React.Component {
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
          onChange={(value) => {
            console.log(value)
            this.setState({
              username: value
            })
        }}/>

        <Field label="用户密码" 
          value={this.state.password}
          type="password"
          onChange={(value) => {
            console.log(value)
            this.setState({
              password: value
            })
        }}/>

        <button onClick={() => {
          console.log('发送数据给后端', this.state.username, this.state.password)
        }}>登陆</button>
        
        <button onClick={() => {
          this.setState({
            username: '',
            password: ''
          })
        }}>取消</button>
      </div>
    )
  }
}

export default App