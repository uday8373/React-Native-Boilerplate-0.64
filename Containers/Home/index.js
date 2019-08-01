import React, { Component } from 'react';
import { View } from 'react-native';
import HomeComponent from './../../Components/Home'

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <HomeComponent navigation={this.props.navigation} />
      </View>
    );
  }
}


