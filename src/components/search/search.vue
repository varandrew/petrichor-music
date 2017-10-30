<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div ref="shortcutWrapper" class="shortcut-wrapper" v-show="!query">
      <scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div>
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
      </scroll>
    </div>
    <div class="search-result" ref="searchResult" v-show="query">
      <suggest :query="query" @beforeListScroll="blurInput" @select="saveSearch" ref="suggest"></suggest>
    </div>
    <confirm ref="confirm" text="清空所有最近搜索记录？" confirmBtnText="清空" @confirm="clearSearchHistory"></confirm>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import SearchBox from 'base/search-box/search-box'
import SearchList from 'base/search-list/search-list'
import Confirm from 'base/confirm/confirm'
import Suggest from 'components/suggest/suggest'
import { getHotKey } from 'api/search'
import { ERR_OK } from 'api/config'
import { mapActions } from 'vuex'
import { playListMixin, searchMixin } from 'common/js/mixin'

export default {
  mixins: [playListMixin, searchMixin],
  data() {
    return {
      hotKey: []
    }
  },
  created() {
    this._getHotKey()
  },
  computed: {
    shortcut() {
      return this.hotKey.concat(this.searchHistory)
    }
  },
  methods: {
    handlePlayList(playList) {
      const bottom = playList.length > 0 ? '60px' : 0

      this.$refs.shortcutWrapper.style.bottom = bottom
      this.$refs.searchResult.style.bottom = bottom
      this.$refs.shortcut.refresh()
      this.$refs.suggest.refresh()
    },
    showConfirm() {
      this.$refs.confirm.show()
    },
    _getHotKey() {
      getHotKey().then(res => {
        console.log(res)
        if (res.code === ERR_OK) {
          this.hotKey = res.data.hotkey.slice(0, 10)
        }
      })
    },
    ...mapActions([
      'clearSearchHistory'
    ])
  },
  watch: {
    query(newQuery) {
      if (!newQuery) {
        // 解决无法滚动的bug
        setTimeout(() => {
          this.$refs.shortcut.refresh()
        }, 20)
      }
    }
  },
  components: {
    Scroll,
    SearchBox,
    SearchList,
    Suggest,
    Confirm
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
