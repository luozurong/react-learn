import  {legacy_createStore, combineReducers, compose, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

import numReducer from './numStatus/numReducer'
import ArrReducer from './ArrStatus/ArrReducer'

// 合并所有reducers
const reducers = combineReducers({
  numReducer,
  ArrReducer
})

// 创建数据仓库
// 工具显示数据：window.__REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
// const store = legacy_createStore(reducers, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && 
//   window.__REDUX_DEVTOOLS_EXTENSION__()
// )

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE({}):compose

const store = legacy_createStore(reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

export default store