import { createReducer } from '../../helpers/redux'

import { SET_USERNAME } from '../actions/user'

const initialState = {
  username: '',
}

const handlers = {
  [SET_USERNAME.SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      username: payload.data,
    }
  },
}

export default createReducer(initialState, handlers)
