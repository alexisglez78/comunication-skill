import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ChatListScreen = ({ onSelectChat, navigation,mobile }) => {
  const chats = [
    { id: '1', name: 'Chat 1' },
    { id: '2', name: 'Chat 2' },
    { id: '3', name: 'Chat 3' },
  ];

  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.chatItem}
          onPress={() => {
            onSelectChat(item.id); // Actualiza el chat seleccionado
            if (!mobile) {
              navigation.navigate('Chat', { chatId: item.id }); 
            }
          }}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  chatItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default ChatListScreen;
