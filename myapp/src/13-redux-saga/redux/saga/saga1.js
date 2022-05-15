import {take, fork, put, call} from 'redux-saga/effects'
function *WatchSaga1 () {
  while (true) {
    // take函数监听组件发来的aciton， 阻塞调用
    yield take('get-list1')
    // fork 非阻塞的时候立即调用
    yield fork(getList1)
  }
}

function *getList1() {
  // 异步处理

  // call函数发一步请求
  let res = yield call(getListAction1)
  console.log(res)
  yield put({
    type: 'change-list1',
    payload: res
  })
  // put函数发出新的action
}

function getListAction1 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1,2,3])
    }, 200)
  })
}

export default WatchSaga1

export {getList1}