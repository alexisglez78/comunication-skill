import { StyleSheet } from 'react-native';
import theme from '../styles/theme';

export const styles = StyleSheet.create({
    container:{
      backgroundColor:theme.primary,
    },
    chatTitle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff',
        paddingBottom:0,
      },
      numberClient:{
        color: '#ffffff',
        paddingLeft:10,
        marginBottom:10
      },
      webGradient: {
        backgroundColor: 'linear-gradient(rgba(21, 40, 67, 0.8), rgba(42, 81, 137, 0.8))',
        flex: 1,
      },
});




