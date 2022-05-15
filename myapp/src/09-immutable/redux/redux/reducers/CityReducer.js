import { fromJS } from "immutable"

const cityCeducer = (prevState={
  cityName: '北京'
}, action={}) => {
  let newState = fromJS(prevState)
  switch (action.type) {
    case 'change-city':
      return newState.set('cityName', action.payload).toJS()
    default:
      return prevState
  }
}

export default cityCeducer