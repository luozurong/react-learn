export default {
  namespace: 'cinema',
  state: {
    list: []
  },
  // 同步
  reducers: {
    changeList(prevState: any, action: any) {
      return {
        ...prevState,
        list: action.payload
      }
    },
    clearList(prevState: any, action: any) {
      return {
        ...prevState,
        list: []
      }
    }
  },
  // 异步
  effects: {
    *getList (action: any, obj: any): any {
      const {put, call} = obj
      var res = yield call(getListForCinema, action.payload.cityId)
      yield put({
        type: 'changeList',
        payload: res
      })
    }
  }
}

async function getListForCinema (cityId: any) {
  var res = await fetch(`https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=5632556`, {
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => res.json())
  return res.data.cinemas
}