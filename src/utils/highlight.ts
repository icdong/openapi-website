export const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = src
    document.body.appendChild(script)
    script.onload = resolve
    script.onerror = reject
  })
}

let highlightIsLoaded = false
export const loadHighlight = async () => {
  if (!highlightIsLoaded) {
    await loadScript('https://assets.lbkrs.com/uploads/4071868f-e64d-4dc9-ab10-8a3c398391fe/highlight.js')
  }
  highlightIsLoaded = true

  setTimeout(() => {
    const newHighlightDom = document.createElement('x-highlight')
    newHighlightDom.setAttribute('container', `[class^='docMainContainer']`)
    newHighlightDom.className = 'doc-highlight'

    document.body.appendChild(newHighlightDom)
  }, 0)
}
