import {Network} from './network'


//Network will recieve 4 Arguments
// "method(type of request)",
// "endpoint ()", 
// "body (if POST method)"

export default class Apis {

  static get_employees = () => {
   return Network('GET', 'employee/9778')
  }

  static create_employee = (data) => {
    return Network('POST', 'create', data)
  }

}