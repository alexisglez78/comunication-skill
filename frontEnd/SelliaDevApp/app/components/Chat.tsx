import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustModal from "../shared/Modals/CustomModal";
import dataConversation from "../../data/Chat-id1.json";
import { styles } from "../styles/ChatStyles";
import Header from "../shared/header";
import EmojiPicker from "../shared/EmojiPicker";
import UserService from "../../services/userService";
import WelcomeScreen from "./WelcomeScreen";
import { endMessage, sendWhatsAppMessage } from '../../services/whatsappService';
import io from 'socket.io-client';

const socket = io('https://ef82-2806-2f0-92e5-9718-5032-f239-fd93-3056.ngrok-free.app');  // Asegúrate de que no haya espacio extra al final de la URL

const Chat = ({ chatId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatData, setChatData] = useState({});
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleSelectEmoji = (emoji) => {
    setNewMessage((prevMessage) => prevMessage + emoji);
    setShowEmojiPicker(false); // Cierra el selector después de seleccionar
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const loadData = async () => {
      const dataConversation = await UserService.getChatData(chatId);
      setChatData(dataConversation);
      setIsLoading(false);
      setUserData(chatId);
    };

    if (chatId) {
      loadData();
      socket.on('whatsapp message', (message) => {
        console.log('Nuevo mensaje de WhatsApp:', message);
        setChatData((prevData) => ({
          ...prevData,
          messages: [...prevData.messages, message], // Agrega el mensaje al final
        }));
        setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
      });
    } else {
      console.log("No cargando datos");
    }

    return () => {
      socket.off('whatsapp message');
    };
  }, [chatId]); // Depende del chatId

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      message_id: Date.now(),
      sender: "Tú",
      message: newMessage,
      timestamp: new Date().toISOString(),
    };

    setChatData((prevData) => ({
      ...prevData,
      messages: [...prevData.messages, message], // Agrega el mensaje al final
    }));
    socket.emit('chat message', newMessage);

    // Desplazar hacia abajo al último mensaje
    
    // Enviar el mensaje por WhatsApp
    handleSendWhatsAppMessage();
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
  };

  const handleSendWhatsAppMessage = async () => {
    console.log("Enviando mensaje a WhatsApp");
    try {
      const response = await sendWhatsAppMessage('525574518872', newMessage); // Número de WhatsApp de destino
      console.log("WhatsApp API response:", response);
      Alert.alert("Mensaje enviado por WhatsApp");
      setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    } catch (error) {
      console.log("Error al enviar el mensaje:", error);
      Alert.alert("Error al enviar el mensaje por WhatsApp");
    }
  };

  if (!chatId) {
    return (
      <WelcomeScreen />
    );
  }

  const renderMessageItem = ({ item }) => {
    const isSent = item.sender === "Tú";

    return (
      <View
        style={[
          styles.messageContainer,
          isSent ? styles.sentMessage : styles.receivedMessage,
        ]}
      >
        <Text style={styles.messageSender}>{isSent ? "Tú" : item.sender}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.messageTimestamp}>
          {new Date(item.timestamp).toLocaleTimeString()}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.chatContainer}>
      <Header userData={userData} />
      <FlatList
        ref={flatListRef}
        data={chatData.messages}
        keyExtractor={(item) => item.message_id.toString()}
        renderItem={renderMessageItem}
      />

      <Modal
        visible={!!selectedMessage}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedMessage(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Mensaje de {selectedMessage?.sender}
            </Text>
            <Text>{selectedMessage?.message}</Text>

            <TouchableHighlight
              style={[styles.modalButton, { backgroundColor: "gray" }]}
              onPress={() => setSelectedMessage(null)}
            >
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Escribe un mensaje..."
        />
        <TouchableOpacity
          onPress={toggleEmojiPicker}
          style={styles.emojiButton}
        >
          <Text style={styles.emojiButtonText}>😊</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
        {showEmojiPicker && <EmojiPicker onSelectEmoji={handleSelectEmoji} />}
      </View>

      <CustModal
        error={modalMessage}
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        duration={3000}
      />
    </View>
  );
};

export default Chat;
