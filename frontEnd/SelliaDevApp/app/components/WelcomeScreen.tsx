import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/WelcomeStyles';

function WelcomeScreen({ onGetStarted }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/prueba.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>Bienvenido !!</Text>
      <Text style={styles.subtitle}>
        Bienvenido al panel de asistencia
      </Text>

    </View>
  );
}

export default WelcomeScreen;


