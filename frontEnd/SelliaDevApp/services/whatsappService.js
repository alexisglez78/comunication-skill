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
  const token = "EAAMZC6MKb7bQBO79Uhevuzp6H1n42z4i4vrZCQfg9aefT4CrQCTsAVK73pHF5JfXUCuFndpO8qC8GMR55KrKZCmZC6CxmkBvU0LqjjI8HGbrDCr465QlCcmqf3hdbjAsjEdNVovafobR4ba0GoqyXiKUZCXNUZCuZBIkvKUDlLJgdv6dozREBPrQcEETRUh71h9mpxrvAk7tqqxNhX9x0TQGUSnCDg1iAZDZD";
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
