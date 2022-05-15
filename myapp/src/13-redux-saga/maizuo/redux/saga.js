import {takeEvery, call, put} from 'redux-saga/effects'
import axios from 'axios'

function *WatchSaga () {
  yield takeEvery('get-cinemalist', getCinemaList)
}

function *getCinemaList() {
  let res = yield call(getListAction)
  yield put({
    type: 'change-cinemalist',
    payload: res
  })
}

function getListAction () {
  return axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2929620',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => {
    return res.data.data.cinemas
  })
}

export default WatchSaga