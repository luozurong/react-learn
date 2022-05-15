import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Login () {
  const history = useHistory()

  const login = () => {
    localStorage.setItem('token', 1)
    history.push('/center')
  }
  
  return (
    <div>
      <h1>登陆页面</h1>
      <input />
      <button onClick={() => login()}>登陆</button>
    </div>
  )
}