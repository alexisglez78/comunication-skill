import React, { Component, useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, TouchableHighlight } from 'react-native';
import {styles} from '../styles/ChatsStyles';
import data from '../../data/chats.json'

const ChatListScreen = ({ onSelectChat, navigation,mobile }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      try {
        // Simulación de la carga de datos desde JSON
        const chats = data;
        console.log(chats);
        setChatData(chats);
      } catch (error) {
        console.error("Error loading chats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getChats();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.tabContainer}>
      <ScrollView>
        <View>
        <FlatList
  style={styles.list}
  data={chatData}
  keyExtractor={(item) => item.chat_id.toString()}
  renderItem={({ item }) => (
    <TouchableHighlight
     
      onPress={() => {
        onSelectChat(item.chat_id);
        if (!mobile) {
          navigation.navigate('components/Chat', {
            title: item.name,
            chat_id: item.chat_id,
          });
        }
      }}
      underlayColor="#F4E2E3"
    >
      <View style={styles.listItem}>
        {/* Imagen de usuario */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>

        {/* Contenedor de texto */}
        <View style={styles.textContainer}>
          <Text style={styles.messageTitle}>{item.name}</Text>
          <Text style={styles.lastMessage}>{item.last_message.message}</Text>
        </View>

        {/* Hora */}
        <Text style={styles.time}>
          {new Date(item.last_message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    </TouchableHighlight>
  )}
  ListEmptyComponent={
    <View style={styles.noDataText}>
      <Text style={styles.noDataText}>You have no conversations. Try creating one!</Text>
    </View>
  }
/>

        </View>
      </ScrollView>
    </View>
  );
};

export default ChatListScreen;
