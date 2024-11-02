import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const ChatListScreen = ({ navigation }) => {
  const chats = [
    { id: '1', name: 'Chat 1' },
    { id: '2', name: 'Chat 2' },
    { id: '3', name: 'Chat 3' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={styles.chatItem}
            onPress={() => navigation.navigate('Chat', { chatName: item.name })}
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chatItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ChatListScreen;
