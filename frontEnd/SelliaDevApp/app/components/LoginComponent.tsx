import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "../styles/LoginStyle";
import {login} from '../../services/authService'

const LoginComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const handleLogin = () => {
  //   console.log("Iniciando sesión con:", email, password);
  // };
  const handleLogin = async () => {
    const token = await login(email, password);
  
    console.log(token);
    if (token) {
      console.log("logeado");
      setIsAuthenticated(true); // Actualiza el estado de autenticación
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
          value={email} // Asegúrate de que solo sea un string
          onChangeText={(text) => setEmail(text)} // Asigna el texto directamente al estado
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password} // Asegúrate de que solo sea un string
          onChangeText={(text) => setPassword(text)} // Asigna el texto directamente al estado
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <Button title="Iniciar sesión" onPress={handleLogin} color="#6200ee" />
        </View>
      </View>
    </View>
  );
};

export default LoginComponent;
