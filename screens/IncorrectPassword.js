import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IncorrectPassword = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    color: 'red',
    fontSize: 16,
  },
});

export default IncorrectPassword;