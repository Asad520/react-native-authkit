import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '@src/store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Home = () => {
  const dispatch = useDispatch();
  const { top, bottom } = useSafeAreaInsets();

  const [user] = useState({ name: 'John Doe', age: 30 });

  const handleLogout = () => {
    // handle logout logic here
    console.log('handle logout');
    dispatch(setIsAuthenticated({ isAuthenticated: false }));
  };

  return (
    <View
      style={{
        ...styles.container,
        paddingBottom: bottom || 20,
        paddingTop: top,
      }}>
      <Text style={styles.heading}>Home</Text>
      <Text style={styles.username}>{user.name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 90,
  },
});
