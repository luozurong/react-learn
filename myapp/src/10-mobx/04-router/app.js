import React , {Component} from 'react'

import MRouter from './router/indexRouter'
import Tabbar from './views/components/Tabbar'
import './views/css/app.css'
import { inject, observer } from 'mobx-react'

// provider 的 store
@inject('store')
@observer
class App extends Component {
  render () {
    return (<div>
      <MRouter>
        {this.props.store.isTabbarShow && <Tabbar></Tabbar>}
      </MRouter>
    </div>)
  }
}

export default App