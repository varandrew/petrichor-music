import jsonp from 'common/js/jsonp'
import {CommonParams, options} from './config'
import axios from 'axios'

export function getRecommond() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, CommonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, CommonParams, {
    rnd: Math.random(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSongList(disstid) {
  const url = '/api/getSongList'
  const data = Object.assign({}, CommonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    jsonpCallback: 'playlistinfoCallback'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
