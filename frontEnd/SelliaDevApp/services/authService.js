// authService.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';
// https://jsonplaceholder.typicode.com/
const API_URL = 'https://jsonplaceholder.typicode.com/';
const SECRET_KEY = 'key1234';

// Función para cifrar la contraseña
export const encryptPassword = (password) => {
  return CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
};

// Función para iniciar sesión y obtener el JWT
// export const login = async (email, password) => {
//   try {
//     const encryptedPassword = encryptPassword(password);

//     const response = await fetch(`${API_URL}/users`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password: encryptedPassword }),
//     });

//     if (!response.ok) {
//       throw new Error('Error en la autenticación');
//     }

//     const data = await response.json();
//     const { token } = data;

//     await AsyncStorage.setItem('userToken', token);

//     return token;
//   } catch (error) {
//     console.error("Error en el login:", error);
//     return null;
//   }
// };
 export const login = async (email, password) => {
   try {
     const encryptedEmail = encryptPassword(email);
     const encryptedPassword = encryptPassword(password);

     console.log({ email:encryptedEmail, password: encryptedPassword });

     const response = await fetch(`${API_URL}/users`, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
       },
     });

     const data = await response.json();
     const  token  = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsZXhpcyBHb256YWxleiIsImlhdCI6MTUxNjIzOTAyMn0.kM6HF6lkPYWnEALO4L4tXFoBoF5uqlRjFgBwU8TArlk`;

     await AsyncStorage.setItem('userToken', token);

     return token;
   } catch (error) {
     console.error("Error en el login:", error);
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
  
      // Configura los encabezados de la solicitud, incluyendo el token JWT
      const headers = {
        ...options.headers,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
  
      // Realiza la solicitud con el método, los encabezados y el cuerpo especificado
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: options.method || 'GET',  // Si no se especifica, por defecto es GET
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,  // Agrega el cuerpo solo si se proporciona
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
  
