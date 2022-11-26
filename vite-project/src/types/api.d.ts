import { RandomUUIDOptions } from "crypto"

// 验证码的响应类型约束
interface CapchaApiRes {
  code: number,
  msg: string,
  captchaEnabled: Boolean,
  img?: string,
  uuid?: string
}

interface LoginApiReq {
  username: string,
  password: string,
  code: string,
  uuid: string
}

interface LoginApiRes {
  code: number,
  msg: string,
  token: string
}