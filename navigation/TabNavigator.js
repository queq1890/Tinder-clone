import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import { createMaterialTopTabNavigator } from 'react-navigation';

export default createMaterialTopTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile'
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home'
      }
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarLabel: 'Matches'
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      labelStyle: {
        padding: 20
      },
      style: {
        height: 75
      }
    }
  }
);
