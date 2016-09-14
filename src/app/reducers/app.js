import { SET_ERROR } from '../actions/error'
import { UPDATE_OUTPUT } from '../actions/output'

const initialState = {
  output: '',
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_OUTPUT:
      return Object.assign({}, state, {
        output: action.output
      })

    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.error
      })

    default:
     return state
  }
}
