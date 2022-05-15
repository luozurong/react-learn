import request from '../utils/request';

export function getCinemaListApi() {
  return request('https://m.maizuo.com/gateway?cityId=440100&ticketFlag=1&k=4704970', {
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"440100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  });
}
