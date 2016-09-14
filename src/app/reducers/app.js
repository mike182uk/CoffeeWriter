import { SET_STATUS } from '../actions/status'
import { UPDATE_OUTPUT } from '../actions/output'

const initialState = {
  output: '',
  status: ''
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

    default:
     return state
  }
}
