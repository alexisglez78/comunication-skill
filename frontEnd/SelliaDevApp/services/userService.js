import data1 from '../data/Chat-id1.json';
import data2 from '../data/Chat-id2.json';
import data3 from '../data/Chat-id3.json';
import data4 from '../data/Chat-id4.json';

// Simula una base de datos local o servicio API para los chats
const chatDataMap = {
  '1': data1,
  '2': data2,
  '3': data3,
  '4': data4,
};

class UserService {
    constructor() {
        this.apiUrl = 'https://dummyjson.com/users/';
    }

    // Método para obtener los datos del usuario con el id
    async getUserData(id) {
        try {
            const response = await fetch(`${this.apiUrl}${id}`, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            return data; // Devuelve los datos del usuario
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error; // Lanza el error para que se pueda manejar fuera
        }
    }

    // Método para obtener los datos del chat por id
    getChatData(chatId) {
        // Devuelve los datos del chat desde el mapa de chatDataMap
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const chatData = chatDataMap[chatId];
                if (chatData) {
                    resolve(chatData);
                } else {
                    reject(`No se encontraron datos para el chat con ID: ${chatId}`);
                }
            }, 1000); // Simula un retraso de 1 segundo
        });
    }
}

export default new UserService();
