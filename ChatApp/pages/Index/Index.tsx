import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Auth/Login/Login';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui é o Index</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#eeee'
  }
});
