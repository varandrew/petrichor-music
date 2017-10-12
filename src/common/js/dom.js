export function addClass(el, className) {
  if (hasCLass(el, className)) {
    return
  }
  let newClass = el
    .className
    .split(' ')
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

  return val
    ? elm.setAttribute(name, val)
    : elm.getAttribute(name)
}

let elementSyle = document
  .createElement('div')
  .style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    ms: 'msTransform',
    O: 'OTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementSyle[transformNames[key]] !== undefined) {
      return key
    }
    return false
  }
})()

export function prefixStyle(style) {
  if (vendor === 'standard') {
    return style
  } else if (vendor === false) {
    return false
  }

  return vendor + style.charAt(0).toUpperCase() + style.slice(1)
}
