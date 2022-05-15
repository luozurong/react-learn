import axios from 'axios'

// redux-thunk
// function getCinemaListAction() {

//   return (dispath) => {
//     axios({
//       url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2929620',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
//         'X-Host': 'mall.film-ticket.cinema.list'
//       }
//     }).then(res => {
//       dispath({
//         type: 'change-list',
//         payload: res.data.data.cinemas
//       })
//     })
    
//   }
// }


// redux-promise
// function getCinemaListAction() {
//     return axios({
//       url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2929620',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
//         'X-Host': 'mall.film-ticket.cinema.list'
//       }
//     }).then(res => {
//       return{
//         type: 'change-list',
//         payload: res.data.data.cinemas
//       }
//     })
  
// }
// es
async function getCinemaListAction() {
  let list = await axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2929620',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res => {
    return{
      type: 'change-list',
      payload: res.data.data.cinemas
    }
  })
  return list

}

export default getCinemaListAction