import handleArr from "./index"

let reducer = (state = {...handleArr.state}, action: {type: string, value: number}) => {
  let newState = JSON.parse(JSON.stringify(state))
  for(let key in  handleArr.actionsNames) {
    if (action.type === key) {
      handleArr.actions[key](newState, action)
      break
    }
  }
  return newState
}

export default reducer