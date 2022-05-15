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

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})

const persistConfig = {
  key: 'lzr',
  storage,
  whitelist: ['CityReducer']
  // blacklist: ['CityReducer']
}
const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(reduxThunk, reduxPromise)
));

export let persistor = persistStore(store)

export default store


