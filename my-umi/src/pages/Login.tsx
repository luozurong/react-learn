import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'

export default function Login () {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const history = useHistory()

  useEffect(() => {
    fetch('/users').then(res => res.json()).then(res => {
      console.log(res)
    })
  })
  return (
    <div>
      <input type="text"  onClick={(evt: any) => {
        setUsername(evt.target.value)
      }}></input>
      <input type="password" onClick={(evt: any) => {
        setPassword(evt.target.value)
      }}></input>
      <button onClick={() => {
        fetch('/users/login', {
          method: 'POST',
          headers: {

          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        }).then(res => res.json())
        .then(res => {
          console.log(res)
          if (res.ok) {
            localStorage.setItem('token', username)
            history.push('/center')
          } else {
            alert('捂盖用户')
          }
        })
      }}>login</button>
    </div>
  )
}