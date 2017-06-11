import orginJSONP from 'jsonp'

export default function (url, data, option) {
  url += (url.includes('?') ? '&' : '?') + param(data)
  return new Promise((resolve, reject) => {
    orginJSONP(url, option, (err, data) => {
      !err ? resolve(data)
           : reject(data)
    })
  })
}

function param(data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
