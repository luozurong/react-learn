export default {
  namespace: 'city', //命名空间
  state: {
    cityName: '北京',
    cityId: '110100'
  },
  reducers: {
    changeCity(prevState: any, action: any) {
      return {
        ...prevState,
        cityName: action.payload.cityName,
        cityId: action.payload.cityId
      }
    }
  }
}