import { CapchaApiRes, LoginApiReq, LoginApiRes } from 'src/types/api'
import request from '../index'

export const cathchaApi = (): Promise<CapchaApiRes> => request.get('/prod-api/captchaImage')
export const loginApi = (params: LoginApiReq): Promise<LoginApiRes> => request.post('/prod-api/login', params)