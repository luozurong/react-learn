import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './css/03-communaction.css'

const GlobalContext = React.createContext() // 创建context对象


export default function App () {
  const [filmList, setfilmList] = useState([])
  const [info, setInfo] = useState([])

  useEffect(() => {
    axios.get('/test.json').then(res => {
      console.log(res.data.data.films)
      setfilmList(res.data.data.films)
    })
  }, [])

  return (
    <GlobalContext.Provider value={{
      call: '打电话',
      sms: '短信',
      info: info,
      changeInfo: (value) => {
        setInfo(value)
      }
    }}>
      <div>
        {
          filmList.map(item => <FilmItem 
            key={item.filmId} 
            event={(value) => {
              console.log('ssssss', value)
              setInfo(value)
            }}
            {...item}>
          </FilmItem>)
        }
        <FilmDetail/>
      </div>
    </GlobalContext.Provider>
  )

}

function FilmItem (props) {
  let { name, poster, grade, synopsis} = props
  let value = useContext(GlobalContext)
  return (<div onClick={() => {
          value.changeInfo(synopsis)
        }}>
      <div className="filmItem">
        <img src={poster} alt={name}/>
        <div>
          <h4>{name}</h4>
          <div>观众评分{grade}</div>
        </div>
      </div>
    </div>
      
  )
}

function FilmDetail () {
  const value = useContext(GlobalContext)
  return <div className="filmDetail">
    <div>detail - {value.info}</div>
  </div>
}