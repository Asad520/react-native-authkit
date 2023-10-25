import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export const Home = () => {
  const [user] = useState({ name: 'John Doe', age: 30 });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
      <Text>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
