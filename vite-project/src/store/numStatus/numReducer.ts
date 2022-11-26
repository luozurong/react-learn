import handleNum from "./index"

let reducer = (state = {...handleNum.state}, action: {type: string, value: number}) => {
  let newState = JSON.parse(JSON.stringify(state))
  for(let key in  handleNum.actions) {
    if (action.type === key) {
      handleNum.actions[key](newState, action)
      break
    }
  }
  return newState
}

export default reducer