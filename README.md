<h1 align="center">Petrichor Music</h1>

<p align="center">
<a href="https://travis-ci.org/Alamofire/varandrew/Petrichor-Music"><img src="https://travis-ci.org/varandrew/Petrichor-Music.svg?branch=master" alt="Build Status"></a>
<a href="https://github.com/varandrew/Petrichor-Music"><img src="https://img.shields.io/npm/v/npm.svg" alt="Version"></a>
<a href="https://david-dm.org/varandrew/Petrichor-Music"><img src="https://david-dm.org/varandrew/Petrichor-Music.svg" alt="Dependency manage"></a>
<a href="https://vuejs.org"><img src="https://img.shields.io/badge/framework-vue-orange.svg" alt="Framework"></a>
</p>

> A music player build by vue.

## Screenshot
### 推荐页面

<img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_1_squashed.png" width="365" height="619"/> <img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_2_squashed.png" width="365" height="619"/>

### 歌手页面

<img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_3_squashed.png" width="365" height="619"/> <img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_4_squashed.png" width="365" height="619"/>

### 播放页面

<img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_5_squashed.png" width="365" height="619"/> <img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_6_squashed.png" width="365" height="619"/>

### 排行榜页面

<img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_7_squashed.png" width="365" height="619"/> <img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_8_squashed.png" width="365" height="619"/>

### 用户页面
<img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_9_squashed.png" width="365" height="619"/> <img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_10_squashed.png" width="365" height="619"/>

### 搜索页面

<img src="https://github.com/varandrew/Petrichor-Music/blob/master/screenshot/screenshot_11_squashed.png" width="365" height="619"/>

## 项目布局
```bash
./
├── README.md                           # Readme
├── build                               # webpack配置文件
├── config                              # 项目打包路径
├── screenshot                          # 项目截图
├── dist                                # 上线项目文件
├── index.html                          # 入口html文件
├── package.json                        # npm配置文件
├── package-lock.json                   # npm5锁定依赖版本
├── prod.server.js                      # express 运行build后的dist文件
├── src                                 # 源码目录
│   ├── App.vue                         # 页面入口文件
│   ├── main.js                         # 程序入口文件，加载各种公共组件
│   ├── api                             # api 获取数据
│   │   ├── config.js                   # api配置文件
│   │   ├── rank.js                     # rank页面api
│   │   ├── recommend.js                # remcommend页面api
│   │   ├── search.js                   # search页面api
│   │   ├── singer.js                   # singe页面api
│   │   └── song.js                     # song页面api
│   ├── base                            # 基本组件
│   │   ├── confirm
│   │   │   └── confirm.vue             # 确认请求组件
│   │   ├── listview
│   │   │   └── listview.vue            # 列表展示组件
│   │   ├── loading
│   │   │   ├── loading.gif
│   │   │   └── loading.vue             # 加载中组件
│   │   ├── no-result
│   │   │   ├── no-result.vue           # 无搜索结果组件
│   │   │   ├── no-result@2x.png        # 占位图片2x
│   │   │   └── no-result@3x.png        # 占位图片3x
│   │   ├── progress-bar
│   │   │   └── progress-bar.vue        # 进度条组件
│   │   ├── progress-circle
│   │   │   └── progress-circle.vue     # 圆形进度条组件
│   │   ├── scroll
│   │   │   └── scroll.vue              # 滑动组件
│   │   ├── search-box
│   │   │   └── search-box.vue          # 搜索输入组件
│   │   ├── search-list
│   │   │   └── search-list.vue         # 搜索展示组件
│   │   ├── slider
│   │   │   └── slider.vue              # slider组件
│   │   ├── song-list
│   │   │   ├── song-list.vue           # 歌曲列表组件
│   │   │   ├── first@2x.png            # 排行榜第一图标2x
│   │   │   ├── first@3x.png            # 排行榜第一图标3x
│   │   │   ├── second@2x.png           # 排行榜第二图标2x
│   │   │   ├── second@3x.png           # 排行榜第二图标3x
│   │   │   ├── third@2x.png            # 排行榜第三图标2x
│   │   │   └── third@3x.png            # 排行榜第三图标3x
│   │   ├── switches
│   │   │   └── switches.vue            # tab切换组件
│   │   └── top-tip
│   │       └── top-tip.vue             # 顶部消息组件
│   ├── common                          # 公共配置
│   │   ├── fonts                       # 字体图标配置
│   │   │   ├── iconfont.eot
│   │   │   ├── iconfont.svg
│   │   │   ├── iconfont.ttf
│   │   │   ├── iconfont.woff
│   │   │   ├── music-icon.eot
│   │   │   ├── music-icon.svg
│   │   │   ├── music-icon.ttf
│   │   │   └── music-icon.woff
│   │   ├── image                       # 图片资源
│   │   │   └── default.gif
│   │   ├── js                          # 公共js
│   │   │   ├── cache.js                # 缓存操作js
│   │   │   ├── config.js               # 播放模式配置js
│   │   │   ├── dom.js                  # dom操作js
│   │   │   ├── jsonp.js                # jsonp操作js
│   │   │   ├── mixin.js                # 组件mixin
│   │   │   ├── singer.js               # 歌手操作js
│   │   │   ├── song.js                 # 歌曲操作js
│   │   │   ├── storage.js              # 封装的本地缓存js
│   │   │   └── utils.js                # 封装的工具类
│   │   └── stylus                      # css样式配置
│   │       ├── base.styl               # 基本的css样式配置
│   │       ├── icon.styl               # 图片css配置
│   │       ├── index.styl              # 入口css文件
│   │       ├── mixin.styl              # css mixin配置
│   │       ├── reset.styl              # css样式重置
│   │       └── variable.styl           # 自定义的css样式，方便使用
│   ├── components                      # 组件库
│   │   ├── add-song
│   │   │   └── add-song.vue            # 添加歌曲页面
│   │   ├── disc
│   │   │   └── disc.vue                # 唱片页面
│   │   ├── m-header
│   │   │   ├── logo@2x.png
│   │   │   ├── logo@3x.png
│   │   │   └── m-header.vue            # 头部组件
│   │   ├── music-list
│   │   │   └── music-list.vue          # 歌曲列表页面
│   │   ├── play-list
│   │   │   └── play-list.vue           # 播放列表页面
│   │   ├── player
│   │   │   └── player.vue              # 播放器组件
│   │   ├── rank
│   │   │   └── rank.vue                # 排行页面
│   │   ├── recommend
│   │   │   └── recommend.vue           # 推荐页面
│   │   ├── search
│   │   │   └── search.vue              # 搜索页面
│   │   ├── singer
│   │   │   └── singer.vue              # 歌手页面
│   │   ├── singer-detail
│   │   │   └── singer-detail.vue       # 歌手详细页面
│   │   ├── suggest
│   │   │   └── suggest.vue             # 搜索建议组件
│   │   ├── tab
│   │   │   └── tab.vue                 # tab组件
│   │   ├── top-list
│   │   │   └── top-list.vue            # 顶部消息组件
│   │   └── user-center
│   │       └── user-center.vue         # 用户中心页面
│   ├── router                          # 路由
│   │   └── index.js                    # 路由配置
│   └── store                           # vuex的状态管理
│       ├── index.js                    # 引用vuex，创建store
│       ├── actions.js                  # 配置actions
│       ├── getters.js                  # 配置getters
│       ├── mutation-types.js           # 定义常量muations名
│       ├── mutations.js                # 配置mutations
│       └── state.js                    # 配置state
└── static                              # 静态文件

48 directories, 133 files

```
## 项目运行

``` bash
# git clone
git clone https://github.com/varandrew/Petrichor-Music.git

# change dir
cd Petrichor-Music

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run production serve with express at localhost:9001
npm run prod
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


