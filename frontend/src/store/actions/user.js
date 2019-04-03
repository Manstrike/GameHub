import { createAsyncAction } from '../../helpers/redux'

import socketTypes from '../../constants/socketTypes'

import { socketCall } from './highOrderActions'

export const SET_USERNAME = createAsyncAction(
  `socket/${socketTypes.setUsername.toUpperCase()}`,
)
export const setUsername = (username, callback) => {
  return socketCall({
    types: SET_USERNAME,
    query: username,
    withActivityLoader: true,
    callback,
    socketType: socketTypes.setUsername,
    isRequest: true,
  })
}
