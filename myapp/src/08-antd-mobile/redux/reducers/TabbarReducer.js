const tabbarReducer = (prevState={
  show: true
}, action={}) => {
  let newState = {...prevState}
  switch (action.type) {
    case 'lzr-tabbar-hidden':
      newState.show = false
      return newState
      case 'lzr-tabbar-show':
        newState.show = true
        return newState
    default:
      return newState
  }
}

export default tabbarReducer