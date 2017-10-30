import * as types from './mutation-types'
import { playMode } from 'common/js/config'
import { shuffleArray } from 'common/js/utils'
import { saveSearch, deleteSearch, clearSearch, savePlay, saveFavorite, deleteFavorite } from 'common/js/cache'

function findIndex(list, item) {
  return list.findIndex((value) => {
    return value.id === item.id
  })
}

export const selectPlay = ({commit, state}, {list, index}) => {
  commit(types.SET_SEQUENCE_LIST, list)
  if (state.mode === playMode.random) {
    let randomList = shuffleArray(list)
    index = findIndex(randomList, list[index])
    commit(types.SET_PLAY_LIST, randomList)
  } else {
    commit(types.SET_PLAY_LIST, list)
  }
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const randomPlay = ({commit}, {list}) => {
  commit(types.SET_PLAY_MODE, playMode.random)
  commit(types.SET_SEQUENCE_LIST, list)
  let randomList = shuffleArray(list)
  commit(types.SET_PLAY_LIST, randomList)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const insertSong = ({commit, state}, song) => {
  // 从state获取数据 因为vuex不推荐使用mutation之外的来修改stat,所以用slice来复制一份
  let playList = state.playList.slice()
  let sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex
  let currentSong = playList[currentIndex]
  // 查找当前的播放列表是否含有待插入的歌曲并返回其索引
  let fpIndex = findIndex(playList, song)
  // 因为要插入歌曲，所以索引+1
  ++currentIndex
  // 将歌曲插入到当前索引位置
  playList.splice(currentIndex, 0, song)
  // 如果playList中已经包含了这首歌
  if (fpIndex > -1) {
    // 如果当前插入的序号大于列表中的序号
    if (currentIndex > fpIndex) {
      playList.splice(fpIndex, 1)
      --currentIndex
    } else {
      // 如果当前插入的序号小于列表中的序号
      playList.splice(fpIndex + 1, 1)
    }
  }

  let currentSIndex = findIndex(sequenceList, currentSong) + 1
  let fsIndex = findIndex(sequenceList, song)

  sequenceList.splice(fsIndex, 0, song)

  if (fsIndex > -1) {
    if (currentSIndex > fsIndex) {
      sequenceList.splice(fsIndex, 1)
    } else {
      sequenceList.splice(fsIndex + 1, 1)
    }
  }

  commit(types.SET_PLAY_LIST, playList)
  commit(types.SET_SEQUENCE_LIST, sequenceList)
  commit(types.SET_CURRENT_INDEX, currentIndex)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const deleteSong = ({commit, state}, song) => {
  let playList = state.playList.slice()
  let sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex
  let pIndex = findIndex(playList, song)
  let sIndex = findIndex(sequenceList, song)

  playList.splice(pIndex, 1)
  sequenceList.splice(sIndex, 1)

  if (currentIndex > pIndex || currentIndex === playList.length) {
    --currentIndex
  }

  const playingState = playList.length > 0
  commit(types.SET_PLAYING_STATE, playingState)

  commit(types.SET_PLAY_LIST, playList)
  commit(types.SET_SEQUENCE_LIST, sequenceList)
  commit(types.SET_CURRENT_INDEX, currentIndex)
}

export const clearSongList = ({commit}) => {
  commit(types.SET_PLAY_LIST, [])
  commit(types.SET_SEQUENCE_LIST, [])
  commit(types.SET_CURRENT_INDEX, -1)
  commit(types.SET_PLAYING_STATE, false)
}

export const saveSearchHistory = ({commit}, query) => {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

export const deleteSearchHistory = ({commit}, query) => {
  commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}

export const clearSearchHistory = ({commit}) => {
  commit(types.SET_SEARCH_HISTORY, clearSearch())
}

export const savePlayHistory = ({commit}, song) => {
  commit(types.SET_PLAY_HISTORY, savePlay(song))
}

export const saveFavoriteList = ({commit}, song) => {
  commit(types.SET_FAVORITE_LIST, saveFavorite(song))
}

export const deleteFavoriteList = ({commit}, song) => {
  commit(types.SET_FAVORITE_LIST, deleteFavorite(song))
}
