type RootState = ReturnType<typeof import('@/store').getState> // 获取仓库数据类型

interface window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function,
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function
}