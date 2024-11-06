import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SessionInfo = () => {
  return (
    <View style={styles.sessionContainer}>
      <Text style={styles.sessionTitle}>Usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sessionContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 15,
  },
  sessionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

});

export default SessionInfo;
