import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import './css/03-communaction.css'

const initailState = {
  info: '',
  filmList: []
}

const reducer = (prevState, action) => {
  let newState = {...prevState}
  switch(action.type) {
    case 'change-filmList':
      newState.filmList = action.value
      return newState
    case 'change-info':
      newState.info = action.value
      return newState
    default: 
      return newState
  }
}

const GlobalContext = React.createContext() // 创建context对象

export default function App () {
  const [state, dispatch] = useReducer(reducer, initailState)

  useEffect(() => {
    axios.get('/test.json').then(res => {
      console.log(res.data.data.films)
      dispatch({
        type: 'change-filmList',
        value: res.data.data.films
      })
    })
  }, [])

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        {
          state.filmList.map(item => <FilmItem 
            key={item.filmId} 
            event={(value) => {
              console.log('ssssss', value)
              dispatch({
                type: 'change-info',
                value: value
              })
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
  let {dispatch} = useContext(GlobalContext)

  const formatter = (value) => {
    return value && Number(value).toFixed(2)
  }

  return (<div onClick={() => {
          dispatch({
            type: 'change-info',
            value: synopsis
          })
        }}>
      <div className="filmItem">
        <img src={poster} alt={name}/>
        <div>
          <h4>{name}</h4>
          <div>观众评分{formatter(grade)}</div>
        </div>
      </div>
    </div>
  )
}

function FilmDetail () {
  const {state} = useContext(GlobalContext)
  return <div className="filmDetail">
    <div>detail - {state.info}</div>
  </div>
}