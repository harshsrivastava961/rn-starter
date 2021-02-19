import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DropDown = () => {
  return (
    <View  style={styles.background}>
      <Text style={styles.textStyle} >Status</Text>
      <Text style={styles.textStyleOne} >Action History</Text>
      <AntDesign name="eye" size= {30} style={styles.logo}/>
      <MaterialCommunityIcons name="pencil-box-outline" size={30} style={styles.logo}/>

    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginVertical:8,
        flexDirection: 'row',
        height: 100,
        borderRadius: 8
    },
    textStyle: {
        marginRight: 60,
        marginVertical:12
    },
    textStyleOne: {
        marginRight: 46,
        marginVertical: 14,
        fontSize: 13,
    },
    logo: {
        marginVertical:37
        
    }
});

export default DropDown;
