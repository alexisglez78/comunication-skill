import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SessionInfo = () => {
  return (
    <View style={styles.sessionInfoContainer}>
      <Image
        source={{ uri: 'https://example.com/your-profile-pic.jpg' }} // Cambia esto a la URL de la imagen de perfil
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Tu Nombre</Text>
      <Text style={styles.userStatus}>En línea</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sessionInfoContainer: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 14,
    color: '#888',
  },
});

export default SessionInfo;
