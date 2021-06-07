import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileComponent from './../../Components/Profile'

export default class Profile extends Component {

  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View>
        <ProfileComponent navigation={this.props.navigation} />
      </View>
    );
  }
}


