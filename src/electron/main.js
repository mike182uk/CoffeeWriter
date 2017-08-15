const electron = require('electron')
const path = require('path')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

const ENV = process.env.NODE_ENV || 'prod'

let window

const createWindow = () => {
  let windowOptions = {
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js')
    },
    titleBarStyle: 'hidden'
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

const createMainMenu = (app) => {
  var template = [
    {
      label: app.getName(),
      submenu: [
        { label: `About ${app.getName()}`, selector: 'orderFrontStandardAboutPanel:' },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'Command+Q', click: () => app.quit() }
      ]
    }, {
      label: 'Edit',
      submenu: [
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' }
      ]}
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}

app.on('ready', () => {
  createWindow()
  createMainMenu(app)
})

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
