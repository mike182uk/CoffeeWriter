import { setStatus } from './status'
import { updateOutput } from './output'
import { getCompiler } from '../coffeescript'

export function compileInput (input, coffeeScriptVersion) {
  return dispatch => {
    let output = ''
    let status = {}

    if (input === '') {
      return [
        setStatus(status),
        updateOutput(output)
      ].map(dispatch)
    }

    try {
      output = getCompiler(coffeeScriptVersion).compile(input, { bare: true })
    } catch (e) {
      status.message = e.message
      status.line = e.location.first_line + 1
      status.column = e.location.first_column + 1
    }

    return [
      setStatus(status),
      updateOutput(output)
    ].map(dispatch)
  }
}
