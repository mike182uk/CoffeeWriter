export const SET_COFFEESCRIPT_VERSION = 'SET_COFFEESCRIPT_VERSION'
export const SET_EDITOR_THEME = 'SET_EDITOR_THEME'
export const SET_OUTPUT_THEME = 'SET_OUTPUT_THEME'

export function setCoffeeScriptVersion (version) {
  return {
    type: SET_COFFEESCRIPT_VERSION,
    version
  }
}

export function setEditorTheme (theme) {
  return {
    type: SET_EDITOR_THEME,
    theme
  }
}

export function setOutputTheme (theme) {
  return {
    type: SET_OUTPUT_THEME,
    theme
  }
}
