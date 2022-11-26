const store = {
  state: {
    num: 20
  },
  actions: { // 只能同步修改数据
    add1 (newState: {num: number}) {
      newState.num ++
    },
    add2 (newState: {num: number}, action: {type: string, value: number}) {
      newState.num += action.value
    },
    add3 (newState: {num: number}, action: {type: string, value: number}) {
      newState.num += action.value
    }
  },
  // 优化redux-thunk异步的方法
  asyncActions: { 
    asyncAdd1 (dis: Function) {
      setTimeout(() => {
        dis({type: 'add3', value: 200})
      }, 1000)
    }
  },
  actionsNames: {}
}

export default store