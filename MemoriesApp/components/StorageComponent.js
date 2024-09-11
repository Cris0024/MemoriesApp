import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export const StorageComponent = ({ savedItems }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={savedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.description}</Text>
            <Text>{item.location.latitude}, {item.location.longitude}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
