/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useState, useEffect } from 'react'
//Redux imports
import { Provider } from 'react-redux'
import configReduxStore from './Config/configReduxStore'
//React Navigation imports
import { createStackNavigator, createAppContainer } from 'react-navigation'
//Other imports
import NetworkError from './Services/networkError'
import NetInfo from "@react-native-community/netinfo";
//Screens import
import HomeScreen from './Containers/Home'
import ProfileScreen from './Containers/Profile'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
})

const store = configReduxStore()
const Container = createAppContainer(MainNavigator);

const App = () => {
  const [netStatus, setNet] = useState(true)
  //Checking live status of internet connection
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNet(state.isConnected)
    });
  })

  return (
    <Provider store={store}>
      {!netStatus ? <NetworkError /> : null}
      <Container />
    </Provider>
  )
}

export default App;
