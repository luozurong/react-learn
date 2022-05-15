const cityCeducer = (prevState={
  cityName: '北京'
}, action={}) => {
  let newState = {...prevState}
  switch (action.type) {
    case 'change-city':
      newState.cityName = action.payload
      return newState
    default:
      return newState
  }
}

export default cityCeducer