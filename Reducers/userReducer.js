import { USER_FETCH, USER_FETCH_FAIL } from './../Actions/types'


export default function(state = {}, action) {
    switch (action.type) {
      case USER_FETCH:
        return { user: action.payload };
      case USER_FETCH_FAIL:
        return { user: action.payload };
      default:
        return state;
    }
  }