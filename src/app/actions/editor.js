import { setError } from './error'
import { updateOutput } from './output'
import CoffeeScript from 'coffee-script'

export function compileInput (input) {
  return dispatch => {
    let output = ''

    if (input == '') {
      return [
        setError(''),
        updateOutput('')
      ].map(dispatch)
    }

    try {
      output = CoffeeScript.compile(input, { bare: true })
    } catch (e) {
      return [
        setError(e.message),
        updateOutput('')
      ].map(dispatch)
    }

    return [
      setError(''),
      updateOutput(output)
    ].map(dispatch)
  }
}
