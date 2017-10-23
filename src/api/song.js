import { commonParams } from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = 'api/getLyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    format: 'json',
    needNewCode: 0,
    hostUin: 0,
    loginUin: 0,
    pcachetime: +new Date()
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
