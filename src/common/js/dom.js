export function addClass(el, className) {
  if (hasCLass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasCLass(el, className) {
  let reg = new RegExp(`(^|\\s)${className}(\\s|$)`)
  return reg.test(el.className)
}

export function getData(elm, name, val) {
  const prefix = 'data-'
  name = prefix + name

  return val ? elm.setAttribute(name, val)
             : elm.getAttribute(name)
}
