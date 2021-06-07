import {Network} from './network'


//Network will recieve 4 Arguments
// "method(type of request)",
// "endpoint ()", 
// "body (if POST method)"
// See the main function at ./network.js

export default class Apis {

  static fetch_users = () => {
   return Network('GET', 'users')
  }

  static create_employee = (data) => {
    return Network('POST', 'create', data)
  }

}