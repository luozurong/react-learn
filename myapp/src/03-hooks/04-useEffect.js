import React, { useEffect, useState } from 'react'

export default function App () {
  let [name, setName] = useState('lzr')

  useEffect(() => {
    setName(name.substring(0,1).toLocaleUpperCase() + name.substring(1))
  }, [name])
  
  return (
    <div>
      app - {name}
      <button onClick={() => {
        setName('xiaoming')
      }}>click</button>
    </div>
  )
}