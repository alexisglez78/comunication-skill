import { StyleSheet } from 'react-native';
import theme from '../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  list: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width:'100%'
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5, // Hace la imagen circular
    backgroundColor: '#C4C4C4', // Color de fondo si no hay imagen
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.primary, // Color similar al verde de WhatsApp
  },
  lastMessage: {
    fontSize: 14,
    color: '#757575', // Gris para el último mensaje
  },
  time: {
    fontSize: 12,
    color: '#919191', // Color gris claro para la hora
  },
  noDataText: {
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
    padding: 20,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
