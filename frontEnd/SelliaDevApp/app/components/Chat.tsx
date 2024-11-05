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
} from "react-native";
import CustModal from "../shared/Modals/CustomModal";
import dataConversation from "../../data/Chat-id1.json";
import { styles } from "../styles/ChatStyles";
import Header from "../shared/header";
import EmojiPicker from "../shared/EmojiPicker";

const Chat = ({ chatId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatData, setChatData] = useState({});
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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
      setIsLoading(true);
      setChatData(dataConversation);
      setIsLoading(false);
    };
    loadData();
  }, []);

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
    setNewMessage("");

    // Desplazar hacia abajo al último mensaje
    setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
  };

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
      <Header />
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
