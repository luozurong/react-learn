import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import createSagaMidlleWare from 'redux-saga'
import WatchSaga from './saga-every'

const sagaMidlleWare = createSagaMidlleWare ()
const store = createStore(reducer, applyMiddleware(sagaMidlleWare))

sagaMidlleWare.run(WatchSaga)

export default store