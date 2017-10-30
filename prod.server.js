var express = require('express')
var config = require('./config/index')
var axios = require('axios')

var app = express()

var apiRoutes = express.Router()

apiRoutes.get('/getDiscList', function(req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  axios
    .get(url, {
      headers: {
        referer: 'https://c.y.qq.com',
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(e => {
      console.log(e)
    })
})

apiRoutes.get('/getLyric', function(req, res) {
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

  axios
    .get(url, {
      headers: {
        referer: 'https://c.y.qq.com',
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      var ret = response.data
      if (typeof ret === 'string') {
        // 将服务端返回的jsonp转为json格式
        var reg = /^\w+\(({[^()]+})\)$/
        var matches = ret.match(reg)
        if (matches) {
          ret = JSON.parse(matches[1])
        }
      }
      res.json(ret)
    })
    .catch(e => {
      console.log(e)
    })
})

apiRoutes.get('/getSongList', function(req, res) {
  var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  axios
    .get(url, {
      headers: {
        referer: `https://y.qq.com/n/yqq/playlist/${req.query.disstid}.html`,
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      var ret = response.data
      // ret = ret.replace(/\\"/g, '\\\\"')  nodejs和浏览器环境不同，并不用作二次转义
      if (typeof ret === 'string') {
        // 将服务端返回的jsonp转为json格式
        ret = ret.slice(req.query.jsonpCallback.length + 1, ret.length - 1)
        ret = JSON.parse(ret)
      }
      res.json(ret)
    })
    .catch(e => {
      console.log(e)
    })
})

app.use('/api', apiRoutes)

// 加载静态资源，刚刚build好的dist目录
app.use(express.static('./dist'))

var port = process.env.PORT || config.build.port

module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhist:' + port + '\n')
})
