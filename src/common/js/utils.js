/**
 * 获得区间内的一个随机数
 * @param {*} min
 * @param {*} max
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffleArray(arr) {
  let __arr = arr.slice()
  for (let i = 0; i < __arr.length; ++i) {
    let j = getRandomInt(0, i);
    [__arr[i], __arr[j]] = [__arr[j], __arr[i]]
  }
  return __arr
}

/**
 * 节流函数，传入一个函数和延迟时间
 * @export
 * @param {any} func
 * @param {any} delay
 * @returns
 */
export function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
