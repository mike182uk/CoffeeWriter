import { SET_STATUS } from '../actions/status'
import { UPDATE_OUTPUT } from '../actions/output'
import { SET_COFFEESCRIPT_VERSION } from '../actions/settings'
import { getLatestVersion as getLatestCoffeeScriptVersion } from '../coffeescript'

const initialState = {
  output: '',
  status: '',
  coffeeScriptVersion: getLatestCoffeeScriptVersion()
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

    default:
      return state
  }
}
