import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';

export default function Chat({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{route.params.chatName}</Text>
      <View style={styles.messages}>
        <Text style={styles.message}>Hola, ¿cómo estás?</Text>
        <Text style={styles.message}>¡Estoy bien, gracias!</Text>
      </View>
      <Button title="Regresar a Chats" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  messages: { flex: 1, padding: 10 },
  message: { marginVertical: 5, fontSize: 16 },
});
