import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {HomeScreen, ProfileScreen, ProfileScreen2} from './src/navigation/index';



/* class App extends Component{
  render(){
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen></HomeScreen>
      </SafeAreaView>
    </Fragment>
    );
  };
}


export default App; */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationActions} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Profile2:{screen:ProfileScreen2},
});

const App = createAppContainer(MainNavigator);

export default App;
