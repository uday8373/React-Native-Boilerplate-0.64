import { USER_FETCH } from './../Actions/types'


export default function(state = {}, action) {
    switch (action.type) {
      case USER_FETCH:
        return { user: action.payload };
      default:
        return state;
    }
  }