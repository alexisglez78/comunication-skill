import axios from "axios";

const apiUrl = "http://localhost:3000"; // URL del backend

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(`${apiUrl}/sendMessage`, { message });
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
    }
};
