import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import SessionInfo from '../components/SessionInfo';
import Chat from './Chat';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatListScreen from './Chats';
import { useColorScheme } from '@/hooks/useColorScheme.web';

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get('window');
const isDesktop = width >= 768;


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [selectedChatId, setSelectedChatId] = useState(null);
  
  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
    if (!isDesktop) {
      console.log("seuuuun");
      setSelectedChatId(chatId); 
    }
  };

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        {isDesktop ? (
          <View style={styles.desktopLayout}>
            <View style={styles.leftPanel}>
              <SessionInfo />
              <ChatListScreen onSelectChat={setSelectedChatId} navigation={'none'}  mobile={isDesktop} />
            </View>
            <View style={styles.centerPanel}>
              <Chat chatId={selectedChatId} />
            </View>
          </View>
        ) : (
          <Drawer.Navigator drawerContent={() => <SessionInfo />} drawerType='front'>
          <Drawer.Screen name="Chats">
            {({ navigation }) => (
              <ChatListScreen onSelectChat={setSelectedChatId} navigation={navigation} mobile={isDesktop} />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Chat">
            {({ route }) => {
              const chatId = route.params?.chatId || selectedChatId;
              console.log("paul callback", chatId); // Asegúrate de que esto se imprima
              return <Chat chatId={chatId} />;
            }}
          </Drawer.Screen>
        </Drawer.Navigator>
        )}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Cambia el fondo a blanco o a un color que desees
  },
  desktopLayout: {
    flexDirection: 'row',
    flex: 1,
  },
  leftPanel: {
    width: '30%', // Puedes ajustar el ancho según tus necesidades
    borderRightWidth: 1,
    borderRightColor: '#eee',
    padding: 10,
    backgroundColor: '#f9f9f9', // Color de fondo del panel izquierdo
  },
  centerPanel: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff', // Color de fondo del panel central
  }
});
