import React, { useState } from 'react'

export default function App () {
  const [count, setCount] = useState(0)
  // useState 记忆函数，记住状态
  var myCount = 0

  
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
        myCount ++
      }}>add</button>
      {count} - {myCount}
    </div>
  )
}