import {observable, action, configure, runInAction} from 'mobx'
import axios from 'axios'

configure({
  enforceActions: 'always' // never 
})
// const store = observable({
//   isTabbarShow: true,
//   list: [],
//   cityName: '北京',
//   changeShow () {
//     this.isTabbarShow = true
//   },
//   changeHide() {
//     this.isTabbarShow = false
//   }
// }, {
//   changeHide: action,
//   changeShow: action // 标记两个方法action
// })

// export default store

class Store {
  @observable isTabbarShow = true
  @observable list = []

  @action changeShow () {
    this.isTabbarShow = true
  }
  @action changeHide () {
    this.isTabbarShow = false
  }
  @action async getList () {
    var list = await axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2929620',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      return res.data.data.cinemas
    })

    runInAction(() => {
      this.list = list
    })
  }
}
let store = new Store()
export default store