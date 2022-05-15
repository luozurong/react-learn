import React , {Component} from 'react'
import store from './redux/store'
import './02-可执行生成器'
export default class App extends Component {
  storeHandle(){
    if (store.getState().list1.length === 0) {
      store.dispatch({
        type: 'get-list1'
      })
    } else {
      console.log('缓存', store.getState().list1)
    }
  }

  storeHandle2(){
    if (store.getState().list2.length === 0) {
      store.dispatch({
        type: 'get-list2'
      })
    } else {
      console.log('缓存', store.getState().list2)
    }
  }

  render () {
    return (<div>
      App
      <button onClick={() => {
        this.storeHandle()
      }}>click-ajax-异步缓存</button>

<button onClick={() => {
        this.storeHandle2()
      }}>click-ajax-异步缓存2</button>
    </div>)
  }
}