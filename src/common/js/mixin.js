import { playMode } from 'common/js/config'
import { shuffleArray } from 'common/js/utils'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export const playListMixin = {
  computed: {
    ...mapGetters(['playList'])
  },
  methods: {
    handlePlayList() {
      throw new Error('component must implement handlePlayList method')
    }
  },
  mounted() {
    this.handlePlayList(this.playList)
  },
  activated() {
    this.handlePlayList(this.playList)
  },
  watch: {
    playList(newPlayList) {
      this.handlePlayList(newPlayList)
    }
  }
}

export const playerMixin = {
  computed: {
    iconMode() {
      return this.mode === playMode.sequence
        ? 'icon-sequence'
        : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
    },
    ...mapGetters([
      'sequenceList',
      'currentSong',
      'favoriteList',
      'playList',
      'mode'
    ])
  },
  methods: {
    changeMode() {
      let mode = (this.mode + 1) % 3
      let list = null
      this.setPlayMode(mode)
      if (mode === playMode.random) {
        list = shuffleArray(this.sequenceList)
      } else {
        list = this.sequenceList
      }
      this.setPlayList(list)
      this.resetCurrentIndex(list)
    },
    isFavorite(song) {
      let index = this.favoriteList.findIndex((item) => {
        return item.id === song.id
      })
      return index > -1
    },
    toggleFavorite(song) {
      if (this.isFavorite(song)) {
        this.deleteFavoriteList(song)
      } else {
        this.saveFavoriteList(song)
      }
    },
    getFavoriteIcon(song) {
      return this.isFavorite(song) ? 'icon-favorite' : 'icon-not-favorite'
    },
    resetCurrentIndex(list) {
      // 当改变了playList时当前歌曲的index也发生了改变，所以我们要reset
      let index = list.findIndex(item => {
        return item.id === this.currentSong.id
      })
      this.setCurrentIndex(index)
    },
    ...mapMutations({
      setPlayingState: 'SET_PLAYING_STATE',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlayMode: 'SET_PLAY_MODE',
      setPlayList: 'SET_PLAY_LIST'
    }),
    ...mapActions([
      'saveFavoriteList',
      'deleteFavoriteList'
    ])
  }
}

export const searchMixin = {
  data() {
    return {
      query: '',
      refreshDelay: 100
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    onQueryChange(query) {
      this.query = query
    },
    blurInput() {
      // 解决移动端滑动列表虚拟键盘显示的bug
      this.$refs.searchBox.blur()
    },
    saveSearch() {
      this.saveSearchHistory(this.query)
    },
    addQuery(key) {
      this.$refs.searchBox.setQuery(key)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory'
    ])
  }
}
