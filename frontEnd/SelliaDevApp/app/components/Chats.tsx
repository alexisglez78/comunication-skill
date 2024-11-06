import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { styles } from "../styles/ChatsStyles";
import data from "../../data/chats.json";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Menu, MenuTrigger, MenuOptions, MenuOption, MenuProvider } from 'react-native-popup-menu';
import { logout } from "../../services/authService";

const ChatListScreen = ({ onSelectChat, navigation, mobile,onLogout }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chatData, setChatData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getChats = async () => {
      try {
        // Simulación de la carga de datos desde JSON
        const chats = data;
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
  const handleLogout = async () => {
    try {
      await logout();
      console.log("se cerro la sesion ");
      navigation.replace("Login");
    } catch (error) {
    }
  };
  

  // Filtrar los chats según el texto de búsqueda
  const filteredChats = chatData.filter((chat) =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <MenuProvider>
    <View style={styles.tabContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chats</Text>
        <Menu >
          <MenuTrigger>
            <Icon name="more-vert" size={25} color="#000" />
          </MenuTrigger>
          <MenuOptions >
            <MenuOption onSelect={onLogout} >
              <Text style={styles.menuText}>Cerrar sesión</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar chats..."
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#888" // Color del texto del placeholder
        />
        <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
      </View>
      <ScrollView>
        <FlatList
          style={styles.list}
          data={filteredChats}
          keyExtractor={(item) => item.chat_id.toString()}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                onSelectChat(item.chat_id);
                if (!mobile) {
                  navigation.navigate("components/Chat", {
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
                  <Text style={styles.lastMessage}>
                    {item.last_message.message}
                  </Text>
                </View>

                {/* Hora */}
                <Text style={styles.time}>
                  {new Date(item.last_message.timestamp).toLocaleTimeString(
                    [],
                    { hour: "2-digit", minute: "2-digit" }
                  )}
                </Text>
              </View>
            </TouchableHighlight>
          )}
          ListEmptyComponent={
            <View style={styles.noDataText}>
              <Text style={styles.noDataText}>
                You have no conversations. Try creating one!
              </Text>
            </View>
          }
        />
      </ScrollView>
    </View>
    </MenuProvider>
  );
};

export default ChatListScreen;
