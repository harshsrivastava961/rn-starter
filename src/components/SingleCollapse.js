import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import DropDown from './DropDown';
import Collapsible from 'react-native-collapsible';
import { MaterialIcons } from '@expo/vector-icons';

export  class SingleCollapse extends Component {
  state = {
    collapsed: true,
  };
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
 
render() {
const { header, headerText, content} = styles


    return (
        
      <View styles={styles.viewStyle}>
       
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={header}>
              
              <MaterialIcons name="keyboard-arrow-down" size= {40} style={headerText}/>
            </View>
          </TouchableOpacity>
      <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={content}>
              <DropDown/>
            </View>
          </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 5
   
  },
  headerText: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: '500',
    marginVertical: 10,
  flex: 1
  },
  content: {
    paddingTop: 10,
    backgroundColor: 'gray',
  },
  text: {
    marginLeft: 230
  }
});