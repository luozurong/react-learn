// 1.映入redux
// 2. createStore(reducer)
// function createLzrStore(reducer) {
//   var list = []
//   var state = reducer(undefined, {})
//   function subscribe (callback) {
//     list.push(callback)
//   }
//   function dispath (action) {
//     state = reducer(state. action)
//     for(var i in list) {
//       list[i] && list[i] ()
//     }
//   }
//   function getState () {
//     return state
//   }
//   return {
//     subscribe,
//     dispath,
//     getState
//   }
// }
import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})
// 
// const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(reduxThunk, reduxPromise)
));

export default store
