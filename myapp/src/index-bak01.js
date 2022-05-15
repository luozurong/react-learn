import React from 'react'
import ReactDOM from 'react-dom'

import App from './10-mobx/04-router/app'
import {Provider} from 'mobx-react'
import store from './10-mobx/04-router/mobx/store'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
,document.getElementById('root'))
