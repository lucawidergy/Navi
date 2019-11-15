import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}

export class ProfileScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title=" profile screen2"
          onPress={() => navigate('Profile2', {name: 'banana'})}
        />
      );
    }
}

export class ProfileScreen2 extends Component {
    static navigationOptions = {
      title: 'Welcome2',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title=" Home"
          onPress={() => navigate('Home', {name: 'banana'})}
        />
      );
    }
}



