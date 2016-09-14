const electron = require('electron')
const path = require('path')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const ENV = process.env.NODE_ENV || 'prod'

let window

const createWindow = () => {
  let windowOptions = {
    width: 800,
    height: 600
  }

  let url = `file://${path.resolve(__dirname, '../app/index.html')}`

  if (ENV === 'dev') {
    windowOptions.width = 1100
    url = `http://localhost:${process.env.DEV_SERVER_PORT}`
  }

  window = new BrowserWindow(windowOptions)

  window.loadURL(url)

  if (ENV === 'dev') {
    window.webContents.openDevTools()
  }

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
