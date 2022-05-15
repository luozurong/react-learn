import React, { useState, useRef } from 'react'

export default function App () {
  const [list, setList] = useState(['aa', 'bb', 'cc'])
  const myText = useRef()


  const handleAdd = () => {
    console.log(myText.current.value)
    setList([...list, myText.current.value])
  }

  const handleDel = (index) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <div>

      <input ref={myText}/>
      <button onClick={handleAdd}>click</button>

      <ul>
        {
          list.map((item, index) => <li key={item}>
            {item}
            <button onClick={() => handleDel(index)}>del</button>
          </li>)
        }
      </ul>
      {
        !list.length && <div>暂无待办</div>
      }
    </div>
  )
}