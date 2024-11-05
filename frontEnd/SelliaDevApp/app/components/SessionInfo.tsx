// SessionInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SessionInfo = () => {
  return (
    <View style={styles.sessionContainer}>
      <Text style={styles.sessionTitle}>Usuario</Text>
      <Text>Información de sesión aquí</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sessionContainer: {
    padding: 10,
  },
  sessionTitle: {
    fontWeight: 'bold',
  },
});

export default SessionInfo;
