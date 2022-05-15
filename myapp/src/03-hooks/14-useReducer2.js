import React, { useContext, useReducer } from 'react'

const initailState = {
  a: '111',
  b: '222',
  c: '333'
}

const reducer = (prevState, action) => {
  let newState = {...prevState}
  switch(action.type) {
    case 'change-a':
      newState.a = action.value
      return newState
    case 'change-b':
      newState.b = action.value
      return newState
    default:
      return newState
  }
}

const GlobalContext = React.createContext()

export default function App () {
  const [state, dispatch] = useReducer(reducer, initailState)

  return (<GlobalContext.Provider value={{
    state,
    dispatch
  }}>
    <div>
      <Child1></Child1>
      <Child2></Child2>
      <Child3></Child3>
    </div>
  </GlobalContext.Provider>
  )
}

function Child1 () {
  const { dispatch } = useContext(GlobalContext)
  return <div  style={{background: 'gray'}}>
    <button onClick={() => {
      dispatch({
        type: 'change-a',
        value: Math.random().toFixed(2)
      })
    }}>改变a</button>
    <button  onClick={() => {
      dispatch({
        type: 'change-b',
        value: Math.random().toFixed(2)
      })
    }}>改变b</button>
  </div>
}

function Child2 () {
  const { state } = useContext(GlobalContext)
  return <div  style={{background: 'green'}}>
    child-{state.a}
  </div>
}

function Child3 () {
  const { state } = useContext(GlobalContext)
  return <div style={{background: 'red'}}>
    child-{state.b}
  </div>
}