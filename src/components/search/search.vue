<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div ref="shortcutWrapper" class="shortcut-wrapper" v-show="!query">
      <div class="shortcut" ref="shortcut">
        <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li @click="addQuery(item.k)" class="item" v-for="item in hotKey">
              <span>{{item.k}}</span>
            </li>
          </ul>
        </div>
        <div class="search-history" v-show="searchHistory.length">
          <h1 class="title">
            <span class="text">搜索历史</span>
            <span @click="showConfirm" class="clear">
                <i class="icon-clear"></i>
              </span>
          </h1>
          <search-list @delete="deleteSearchHistory" @select="addQuery" :searches="searchHistory"></search-list>
        </div>
      </div>
    </div>
    <div class="search-result" v-show="query">
      <suggest :query="query" @beforeListScroll="blurInput" @select="saveSearch"></suggest>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import SearchBox from 'base/search-box/search-box'
import SearchList from 'base/search-list/search-list'
import Suggest from 'components/suggest/suggest'
import { getHotKey } from 'api/search'
import { ERR_OK } from 'api/config'
// import {playlistMixin, searchMixin} from 'common/js/mixin'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      hotKey: [],
      query: ''
    }
  },
  created() {
    this._getHotKey()
  },
  computed: {
    ...mapGetters(['searchHistory'])
  },
  methods: {
    blurInput() {
      // 解决移动端滑动列表虚拟键盘显示的bug
      this.$refs.searchBox.blur()
    },
    saveSearch() {
      this.saveSearchHistory(this.query)
    },
    showConfirm() {},
    deleteSearchHistory() {},
    onQueryChange(query) {
      this.query = query
    },
    addQuery(key) {
      this.$refs.searchBox.setQuery(key)
    },
    _getHotKey() {
      getHotKey().then(res => {
        console.log(res)
        if (res.code === ERR_OK) {
          this.hotKey = res.data.hotkey.slice(0, 10)
        }
      })
    },
    ...mapActions(['saveSearchHistory'])
  },
  components: {
    Scroll,
    SearchBox,
    SearchList,
    Suggest
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.search
  .search-box-wrapper
    margin 20px
  .shortcut-wrapper
    position fixed
    top 178px
    bottom 0
    width 100%
    .shortcut
      height 100%
      overflow hidden
      .hot-key
        margin 0 20px 20px 20px
        .title
          margin-bottom 20px
          font-size $font-size-medium
          color $color-text-ll
        .item
          display inline-block
          padding 5px 10px
          margin 0 20px 10px 0
          border-radius 6px
          background $color-background
          font-size $font-size-medium
          color $color-text-dark
          box-shadow 0px 0px 1px #000
      .search-history
        position relative
        margin 0 20px
        .title
          display flex
          align-items center
          height 40px
          font-size $font-size-medium
          color $color-text-ll
          .text
            flex 1
          .clear
            extend-click()
            .icon-clear
              font-size $font-size-medium
              color $color-text-l
  .search-result
    position fixed
    width 100%
    top 178px
    bottom 0
</style>
