
//Config for redux globel store
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import rootReducer from './../Reducers';


export default configReduxStore = (initialState = {}) => {
  const middleware = compose(
    applyMiddleware(thunk, promise)
  )
  return createStore(rootReducer, initialState, middleware)
}






// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// INFORMATION for beginers
//
// REDUX-THUNK - Redux Thunk is a middleware that
//               lets you call action creators that 
//               return a function instead of an action object
//
// *********
// REDUX-PROMISE - redux-thunk "teaches" dispatch how to accept functions,
//                 by intercepting the function and calling it instead of passing it on to the reducers.
//                 redux-promise "teaches" dispatch how to accept promises, 
//                 by intercepting the promise and dispatching actions when the promise resolves or rejects.
