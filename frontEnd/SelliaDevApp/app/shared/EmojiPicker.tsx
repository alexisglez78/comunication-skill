import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import emojis from '../../data/emojis.json'


const EmojiPicker = ({ onSelectEmoji }) => {
  return (
    <View style={styles.pickerContainer}>
      {emojis.emojis.map((emoji) => (
        <TouchableOpacity key={emoji} onPress={() => onSelectEmoji(emoji)}>
          <Text style={styles.emoji}>{emoji}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    position: 'absolute',
    bottom: 70, // Ajusta la posición del selector de emojis
    left: 10,
    right: 10,
  },
  emoji: {
    fontSize: 24,
    margin: 5,
  },
});

export default EmojiPicker;
