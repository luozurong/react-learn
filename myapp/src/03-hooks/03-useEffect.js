import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function App () {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('/test.json').then((res) => {
      console.log(res.data)
      setList(res.data.data.films)
    })
  }, [])
  
  return (
    <div>
      <ul>
        {
          list.map(item => <li key={item.filmId}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}