export const singer = state => state.singer

export const disc = state => state.disc

export const topList = state => state.topList

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playList = state => state.playList

export const playHistory = state => state.playHistory

export const sequenceList = state => state.sequenceList

export const favoriteList = state => state.favoriteList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const searchHistory = state => state.searchHistory

export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
