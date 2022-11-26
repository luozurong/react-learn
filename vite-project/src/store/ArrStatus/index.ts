const store = {
  state: {
    arr: [10, 20]
  },
  actions: {
    arrPush (newState: {arr: number[]}, action: {type: string, value:number}) {
      newState.arr.push(action.value)
    }
  },
  actionsNames: {}
}

export default store