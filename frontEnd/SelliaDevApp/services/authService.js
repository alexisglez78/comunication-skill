import { Platform } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

const API_URL = 'https://jsonplaceholder.typicode.com/';
const SECRET_KEY = 'key1234';

// Función para cifrar la contraseña
export const encryptPassword = (password) => {
  // if (Platform.OS === 'web') {
  //   return CryptoJS.AES.encrypt(password, SECRET_KEY).toString(); // Cifrado para web
  // } else {
  //   return password;
  // }
  return password
};

export const login = async (email, password) => {
  const encryptedEmail = encryptPassword(email);
  const encryptedPassword = encryptPassword(password);
  try {
    const response = await fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 60,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      await AsyncStorage.setItem('userToken', data.accessToken);
      return data.accessToken;

    } else {
      console.error('Error en el login', response.status);
      return null;
    }

  } catch (error) {
    console.error('Error en el login:', error);
    return null;
  }
};

// Función para obtener el token de almacenamiento local
export const getToken = async () => {
  return await AsyncStorage.getItem('userToken');
};

// Función para cerrar sesión y eliminar el token
export const logout = async () => {
  await AsyncStorage.removeItem('userToken');
};

export const fetchWithAuth = async (endpoint, options = {}) => {
  try {
    const token = await getToken();

    if (!token) {
      throw new Error('Usuario no autenticado');
    }

    const headers = {
      ...options.headers,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      method: options.method || 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en fetchWithAuth:', error);
    throw error;
  }
};
