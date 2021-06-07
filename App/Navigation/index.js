import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Containers/Home'
import ProfileScreen from '../Containers/Profile'

const Stack = createStackNavigator();

export const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);
