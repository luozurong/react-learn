import {createStore} from 'redux'

interface IAtion {
  type: string,
  payload?: any
}

const reducer = (prevState = {isShow: true}, action: IAtion) => {
  const {type} = action
  const newState = {...prevState}
  switch(type) {
    case 'show': 
      newState.isShow = true
      return newState
    case 'hide':
      newState.isShow =false
      return newState
    default:
      return newState
  }
}

const store = createStore(reducer)

export default store