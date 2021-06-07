
import NetInfo from "@react-native-community/netinfo";
import axios from 'axios'
import { base_url } from './constants'

//THIS CODE IS FOR DEBUGGIN NETWORK CALLES IN CHROME DEVTOOLS
//REMOVE THIS ON PRODUCTION BUILD
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;


//Main method for network calls using axios
export const Network = (method, endpoint, data = {}) => {
  return fetch = new Promise((resolve, reject) => {
    //cheking network connection
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        axios({
          method,
          url: `${base_url}${endpoint}`,
          data
        }).then((response) => {
            if(response.status === 200) {
              resolve(response.data)
            } else {
              reject('something went wrong')
            }
        });
      }
    });
  })
}


