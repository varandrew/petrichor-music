import { playMode } from 'common/js/config'
import { loadSearch, loadPlay, loadFavorite } from 'common/js/cache'

const state = {
  singer: {},
  disc: {},
  topList: {},
  playing: false,
  fullScreen: false,
  playList: [],
  playHistory: loadPlay(),
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  searchHistory: loadSearch(),
  favoriteList: loadFavorite()
}

export default state
