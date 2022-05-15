import React , {Component} from 'react'
import request from '../utils/request'

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  render () {
    return (<div>
      用户名
      <input value={this.state.username} onChange={(evt) => {
        console.log(evt.target.value)
        this.setState({
          username: evt.target.value
        })
      }}/>
      <br/>
      密码
      <input type="password" value={this.state.password} onChange={(evt) => {
        console.log(evt.target.value)
        this.setState({
          password: evt.target.value
        })
      }}/>
      <button onClick={() => {
        request('/users/login',{
          methos: 'POST',
          body: {
            username: this.state.username,
            password: this.state.password
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          console.log(res)
          localStorage.setItem('token', this.state.username)
          this.props.history.push('/center')
        })


       
      }}>login</button>
    </div>)
  }
}