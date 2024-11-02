import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from '../hooks/useColorScheme';
import SessionInfo from '../components/SessionInfo';
import Chats from './Chats';
import Chat from './Chat';

SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator drawerContent={() => <SessionInfo />}>
        <Drawer.Screen name="Chats" component={Chats} />
        <Drawer.Screen name="Chat" component={Chat} />
      </Drawer.Navigator>
    </ThemeProvider>
  );
}
