export const SET_COFFEESCRIPT_VERSION = 'SET_COFFEESCRIPT_VERSION'

export function setCoffeeScriptVersion (version) {
  return {
    type: SET_COFFEESCRIPT_VERSION,
    version: version
  }
}
