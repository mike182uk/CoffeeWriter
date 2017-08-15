import { SET_STATUS } from '../actions/status'
import { UPDATE_OUTPUT } from '../actions/output'
import { SET_COFFEESCRIPT_VERSION, SET_EDITOR_THEME, SET_OUTPUT_THEME } from '../actions/settings'
import { getLatestVersion as getLatestCoffeeScriptVersion } from '../coffeescript'
import { getDefaultTheme } from '../editor'

const initialState = {
  output: '',
  status: '',
  coffeeScriptVersion: getLatestCoffeeScriptVersion(),
  editorTheme: getDefaultTheme(),
  outputTheme: getDefaultTheme()
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_OUTPUT:
      return Object.assign({}, state, {
        output: action.output
      })

    case SET_STATUS:
      return Object.assign({}, state, {
        status: action.status
      })

    case SET_COFFEESCRIPT_VERSION:
      return Object.assign({}, state, {
        coffeeScriptVersion: action.version
      })

    case SET_EDITOR_THEME:
      return Object.assign({}, state, {
        editorTheme: action.theme
      })

    case SET_OUTPUT_THEME:
      return Object.assign({}, state, {
        outputTheme: action.theme
      })

    default:
      return state
  }
}
