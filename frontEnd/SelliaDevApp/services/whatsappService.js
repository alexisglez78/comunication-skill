import axios from "axios";

// URL de tu backend
const apiUrl = "http://localhost:3000";

// Función para enviar un mensaje al backend
export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${apiUrl}/sendMessage`, { message });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// Función para enviar un mensaje a través de la API de WhatsApp
export const sendWhatsAppMessage = async (to, textMessage) => {
  const token = "EAAMZC6MKb7bQBOy1UTaNMaIjufJkFQMZCqlW5lxXcAvi5zZCcdOTT6aGIPZBTnIiWc4PJFMzz9Md7cwe9BsowTdGnqcRu3YWSVPvDzo9RuwNEJcw0g5fmvbLmCxwC6Yp36q8FFowMVlspZBoGmwXF8lnJ9ZAgCdF7qL6bisrvISmEoT8PpkLLMJrWAlWBZBRV89YYHFeCb3KzZAxZBINlfLZCKCJR9F20ZD";
  const apiUrl = "https://graph.facebook.com/v20.0/457997114067394/messages";
  
  const messageBody = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: to,
    type: "text",
    text: {
      preview_url: false,
      body: textMessage,
    },
  };

  try {
    const response = await axios.post(apiUrl, messageBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    throw error;
  }
};
