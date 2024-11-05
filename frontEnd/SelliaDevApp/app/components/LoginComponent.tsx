import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import styles from '../styles/LoginStyle';
import {login} from '../../services/authService'

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonSubmit} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const LoginComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    const token = await login(email, password);
  
    if (token) {
      setIsAuthenticated(true);
    } else {
      setErrorMessage("Error en el inicio de sesión. Verifica tus credenciales.");
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>👋</Text>
        <Text style={styles.welcomeText}>¡Bienvenido!</Text>
        <Text style={styles.welcomeSubtitle}>Inicia sesión para recibir atención personalizada</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email} 
          onChangeText={(text) => setEmail(text)} 
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password} 
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
        <CustomButton title="Iniciar sesión" onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

export default LoginComponent;
