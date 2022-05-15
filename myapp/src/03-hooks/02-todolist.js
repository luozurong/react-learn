import React, { useState } from 'react'

export default function App () {
  const [text, setText] = useState('')
  const [list, setList] = useState(['aa', 'bb', 'cc'])

  const handleChange = (evt) => {
    console.log('handleChange', evt.target.value)
    setText(evt.target.value)
  }

  const handleAdd = () => {
    console.log(text)

    setList([...list, text])
    setText('')
  }

  const handleDel = (index) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <div>

      <input onChange={handleChange} value={text}/>
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