import store from 'common/js/storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

const PLAY_KEY = '__play__'
const PLAY_MAX_LENGTH = 200

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LENGTH = 200

function insertArray(arr, val, compare, maxLen) {
  let index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

function deleteFromArray(arr, compare) {
  let index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

export function saveSearch(query) {
  let searches = store.get(SEARCH_KEY, [])
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  store.set(SEARCH_KEY, searches)
  return searches
}

export function loadSearch() {
  return store.get(SEARCH_KEY, [])
}

export function deleteSearch(query) {
  let searches = store.get(SEARCH_KEY, [])
  deleteFromArray(searches, (item) => {
    return item === query
  })
  store.set(SEARCH_KEY, searches)
  return searches
}

export function clearSearch() {
  store.remove(SEARCH_KEY)
  return []
}

export function savePlay(song) {
  let songs = store.get(PLAY_KEY, [])
  insertArray(songs, song, (item) => {
    return item.id === song.id
  }, PLAY_MAX_LENGTH)
  store.set(PLAY_KEY, songs)
  return songs
}
export function loadPlay() {
  return store.get(PLAY_KEY, [])
}

export function saveFavorite(song) {
  let songs = store.get(FAVORITE_KEY, [])
  insertArray(songs, song, (item) => {
    return item.id === song.id
  }, FAVORITE_MAX_LENGTH)
  store.set(FAVORITE_KEY, songs)
  return songs
}

export function deleteFavorite(song) {
  let songs = store.get(FAVORITE_KEY, [])
  deleteFromArray(songs, (item) => {
    return item.id === song.id
  })
  store.set(FAVORITE_KEY, songs)
  return songs
}

export function loadFavorite() {
  return store.get(FAVORITE_KEY, [])
}
