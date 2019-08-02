import Apis from './../Services/apis'
import { USER_FETCH } from './types'


export const getUsers = () => {
  return async dispatch => {
    Apis.fetch_users()
    .then(response => {
      if(response) {
        dispatch({
          type: USER_FETCH,
          payload: response
        })
      }
    })
  }
}
