import React, { useState } from 'react'

export default function App () {
  const [name, setName] = useState('lzr')
  const [age, setAge] = useState(110)
  console.log(name)
  return (
    <div>
      <button onClick={() => {
        setName('小明')
        setAge(18)
      }}>click</button>
      app - {name} - {age}
    </div>
  )
}