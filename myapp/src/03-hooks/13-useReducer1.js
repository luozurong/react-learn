import React, { useReducer } from 'react'

export default function App () {
  const reducer = (prevState, action) => {
    let newState = {...prevState}
    switch(action.type) {
      case 'lzr-mius':
        newState.count--
        return newState
      case 'lzr-add':
        newState.count++
        return newState
      default: 
        return newState
    }
  }
  const intialState = {
    count: 2
  }

  const [state, dispath] = useReducer(reducer, intialState)
  return (
    <div>
      <button onClick={() => {
        dispath({
          type: 'lzr-mius'
        })
      }}>-</button>
      {state.count}
      <button  onClick={() => {
        dispath({
          type: 'lzr-add'
        })}}>+</button>
    </div>
  )
}