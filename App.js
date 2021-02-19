import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    List: ListScreen
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'Demo',
    },
  }
);

export default createAppContainer(navigator);



























/*import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {SingleCollapse} from './src/components/SingleCollapse'


export default class App extends Component {
 
render() {


    return (
      <View>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <SingleCollapse/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});*/


















