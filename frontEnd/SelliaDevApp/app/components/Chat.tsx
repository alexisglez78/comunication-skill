// Chat.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';

const Chat = ({ chatId }) => {

  useEffect(()=>{
    console.log(chatId,"chatId paul ");
  });
  if (!chatId) {
    return (
      <View style={styles.chatContainer}>
        <Text style={styles.errorText}>No chat selected.</Text>
      </View>
    );
  }

  return (
    <View style={styles.chatContainer}>
      <Text style={styles.chatTitle}>Chat ID: {chatId}</Text>
      {/* Aquí puedes agregar el contenido del chat basado en chatId */}
      <Text style={styles.chatContent}>Contenido del chat {chatId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff', // Asegúrate de que el fondo sea blanco o un color deseado
  },
  chatTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  chatContent: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default Chat;
