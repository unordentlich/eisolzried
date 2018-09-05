'use strict'

export function loadScript (src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = false
    script.src = src
    script.onload = () => {
      resolve(script.src)
    }
    script.onerror = reject
    if (document.body.lastChild.src !== script.src) {
      window.requestAnimationFrame(function () {
        document.body.appendChild(script)
      })
    }
  })
}
