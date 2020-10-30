import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs'
// You can import from local files
import TransactionScreen from './screens/BookTransactions';
import SearchScreen from './screens/SearchScreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
        <Appcontainer />
      
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen:TransactionScreen},
  Search : {screen:SearchScreen},
})
const Appcontainer = createAppContainer(TabNavigator)