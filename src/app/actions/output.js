export const UPDATE_OUTPUT = 'UPDATE_OUTPUT'

export function updateOutput (output) {
  return {
    type: UPDATE_OUTPUT,
    output: output
  }
}
