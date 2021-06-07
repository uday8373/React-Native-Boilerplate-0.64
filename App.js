/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useState, useEffect} from 'react';
//Redux imports
import {Provider} from 'react-redux';
import configReduxStore from './App//Config/configReduxStore';
//React Navigation imports
import {NavigationContainer} from '@react-navigation/native';
//Other imports
import NetworkError from './App/Services/networkError';
import NetInfo from '@react-native-community/netinfo';
import {MainStackNavigator} from './App/Navigation/index'

const store = configReduxStore();

const Container = () => (
  <NavigationContainer>
    <MainStackNavigator/>
  </NavigationContainer>
)

const App = () => {
  const [netStatus, setNet] = useState(true);
  //Checking live status of internet connection
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNet(state.isConnected);
    });
  });

  return (
    <Provider store={store}>
      {!netStatus ? <NetworkError /> : null}
      <Container />
    </Provider>
  );
};

export default App;
