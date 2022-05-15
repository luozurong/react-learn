import {takeEvery, put, call} from 'redux-saga/effects'
function *WatchSaga2 () {
  // while (true) {
  //   // take函数监听组件发来的aciton， 阻塞调用
  //   yield take('get-list2')
  //   // fork 非阻塞的时候立即调用
  //   yield fork(getList2)
  // }
  yield takeEvery('get-list2', getList2)
}

function *getList2() {
  // 异步处理

  // call函数发一步请求
  let res1 = yield call(getListAction2_1)
  let res2 = yield call(getListAction2_2, res1)
  
  yield put({
    type: 'change-list2',
    payload: res2
  })
  
}

function getListAction2_1 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([4,5,6])
    }, 200)
  })
}
function getListAction2_2 (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...data, 7, 8, 9])
    }, 200)
  })
}

export default WatchSaga2

export {
  getList2
}