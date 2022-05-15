
import {getCinemaListApi} from '../services/maizuo'
export default {

  namespace: 'maizuo',

  state: {
    isShow: true,
    list: []
  },

  reducers: {
    show(prevState, action) {
      return { ...prevState, isShow: true};
    },
    hide(prevState, action) {
      return { ...prevState, isShow: false};
    },
    changeCinemaList (prevState, {payload}) {
      return {...prevState, list: payload}
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('初始化')
    }
  },

  effects: {
    *geCinemaList (action, {call, put}) {
      // console.log(obj)
      var res = yield call(getCinemaListApi)
      console.log(res)
      yield put({
        type: 'changeCinemaList',
        payload: res.data.data.cinemas
      })
    }
  }
};
