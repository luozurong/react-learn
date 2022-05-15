import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

// import App from './01-base/01-class组件'
import App from './08-antd-mobile/app'

import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from './08-antd-mobile/redux/store'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate> 
  </Provider>
,document.getElementById('root'))