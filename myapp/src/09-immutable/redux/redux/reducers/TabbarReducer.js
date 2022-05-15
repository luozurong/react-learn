import { fromJS } from 'immutable'
const tabbarReducer = (prevState=fromJS({
  show: true
}), action={}) => {
  switch (action.type) {
    case 'lzr-tabbar-hidden':
      return prevState.set('show', false)
      case 'lzr-tabbar-show':
        return prevState.set('show', true)
    default:
      return prevState
  }
}

export default tabbarReducer