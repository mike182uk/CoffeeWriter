import { setStatus } from './status'
import { updateOutput } from './output'
import CoffeeScript from 'coffee-script'

export function compileInput (input) {
  return dispatch => {
    let output = ''

    if (input == '') {
      return [
        setStatus(''),
        updateOutput('')
      ].map(dispatch)
    }

    try {
      output = CoffeeScript.compile(input, { bare: true })
    } catch (e) {
      return [
        setStatus(e.message),
        updateOutput('')
      ].map(dispatch)
    }

    return [
      setStatus(''),
      updateOutput(output)
    ].map(dispatch)
  }
}
