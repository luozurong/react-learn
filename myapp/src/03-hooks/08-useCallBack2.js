import React, { useCallback, useState, useMemo } from 'react'

export default function App () {
  const [name, setName] = useState('lzr')

  const [text, setText] = useState('')
  const [list, setList] = useState(['aa', 'bb', 'cc'])

  const handleChange = useCallback(
    (evt) => {
    console.log('handleChange', evt.target.value)
    setText(evt.target.value)
  }, [])

  const handleAdd = useCallback(
    () => {
      console.log(text)
  
      setList([...list, text])
      setText('')
    }, [text, list]
  )

  const handleDel = useMemo(
    () => (index) => {
      let newList = [...list]
      newList.splice(index, 1)
      setList(newList)
    }, [list]
  )

  return (
    <div>
      <button onClick={() => {
        setName('111')
      }}>{name}</button>
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