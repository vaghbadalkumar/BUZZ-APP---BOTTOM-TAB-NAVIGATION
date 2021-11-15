import * as React from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Facebook from './screens/fb';
import Instagram from './screens/in';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator({
  Facebook: {
    screen: Facebook,
    navigationOptions:{  
      activeColor: 'white',
      inactiveColor: 'gray',
      barStyle: { backgroundColor: '#3b5998' }
    }
  },
  Instagram: {
    screen: Instagram,
    navigationOptions:{
      activeColor: 'white',
      inactiveColor: 'gray',
      barStyle: { backgroundColor: '#833AB4' }
    }
  },
})

const AppContainer = createAppContainer(TabNavigator);