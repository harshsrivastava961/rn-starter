import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { SingleCollapse } from '../components/SingleCollapse'

const ListScreen = () => {

  const friends = [
    { id: 'Request ID: CET1141', view: 'View Details' },
    { id: 'Request ID: CET1142', view: 'View Details' },
    { id: 'Request ID: CET1143', view: 'View Details' },
    { id: 'Request ID: CET1144', view: 'View Details' },
    { id: 'Request ID: CET1145', view: 'View Details' },
    { id: 'Request ID: CET1146', view: 'View Details' },
    { id: 'Request ID: CET1147', view: 'View Details' },
    { id: 'Request ID: CET1148', view: 'View Details' },
    { id: 'Request ID: CET1149', view: 'View Details' }
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.id}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View style={styles.viewStyle}>
            <Text style={styles.textStyleOne}>
              {item.id}</Text>
            <Text style={styles.textStyleTwo}>{item.view}</Text>
            <Text style={styles.scroll}>
              <ScrollView>
                <SingleCollapse />
              </ScrollView>
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyleOne: {
    marginRight: 65,
    marginVertical: 12
  },
  textStyleTwo: {
    marginRight: 0,
    marginVertical: 13,
    fontSize: 12
  },
  setColorGray: {
    color: '#808080',
    fontSize: 12,
    marginHorizontal: 8
  },
  viewStyle: {
    backgroundColor: 'white',
    marginHorizontal: 0,
    marginVertical: 5,
    flexDirection: 'row',
    height: 120,
    borderRadius: 8,
  },
  logo: {
    marginVertical: 8
  }
});

export default ListScreen;

