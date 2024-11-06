import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import SessionInfo from './components/SessionInfo';
import ChatListScreen from './components/Chats';
import Chat from './components/Chat';
import LoginComponent from './components/LoginComponent';

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get('window');
const isDesktop = width >= 768;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
    if (!isDesktop) {
      setSelectedChatId(chatId);
    }
  };
  const handleLogout = async () => {
    try {
      setIsAuthenticated(false);
      setSelectedChatId(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        {isAuthenticated ? (
          <>
            {isDesktop ? (
              <View style={styles.container}>
                <View style={styles.desktopLayout}>
                  <View style={styles.leftPanel}>
                    <SessionInfo  />
                    <ChatListScreen
                      onSelectChat={setSelectedChatId}
                      navigation={"none"}
                      mobile={isDesktop}
                      onLogout={handleLogout}
                    />
                  </View>
                  <View style={styles.centerPanel}>
                    <Chat chatId={selectedChatId} />
                  </View>
                </View>
              </View>
            ) : (
              <Drawer.Navigator
                drawerContent={() => <SessionInfo />}
                drawerType="front"
              >
                <Drawer.Screen 
                  name="components/Chats"
                  options={{ title: '' }}
                >
                  {({ navigation }) => (
                    <ChatListScreen
                      onSelectChat={setSelectedChatId}
                      navigation={navigation}
                      mobile={isDesktop}
                      onLogout={handleLogout}
                    />
                  )}
                </Drawer.Screen>
                <Drawer.Screen 
                  name="components/Chat"
                  options={{ title: 'Bienvenido' }}
                >
                  {({ route }) => {
                    const chatId = route.params?.chatId || selectedChatId;
                    return <Chat chatId={chatId} />;
                  }}
                </Drawer.Screen>
              </Drawer.Navigator>
            )}
          </>
        ) : (
          <LoginComponent setIsAuthenticated={setIsAuthenticated} />
        )}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  desktopLayout: {
    flexDirection: 'row',
    flex: 1,
  },
  leftPanel: {
    width: '30%',
    borderRightWidth: 1,
    borderRightColor: '#eee',
    backgroundColor: '#f9f9f9',
  },
  centerPanel: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});
