'use strict'

const electron = require('electron')
const remote = electron.remote
const Menu = remote.Menu

const InputMenu = Menu.buildFromTemplate([
  {
    type: 'separator'
  },
  {
    label: 'Cut',
    role: 'cut'
  },
  {
    label: 'Copy',
    role: 'copy'
  },
  {
    label: 'Paste',
    role: 'paste'
  }
])

// https://github.com/electron/electron/issues/4068#issuecomment-170911307
window.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('contextmenu', e => {
    e.preventDefault()
    e.stopPropagation()

    let node = e.target

    while (node) {
      if (node.nodeName.match(/DIV/) && node.className && node.className.match(/^CodeMirror.*$/i)) {
        InputMenu.popup(remote.getCurrentWindow())

        break
      }

      node = node.parentNode
    }
  })
})
