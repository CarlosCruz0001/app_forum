import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, KeyboardAvoidingView, Platform} from 'react-native';
import {styles} from './style'

export default function ForumScreen() {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePublish = () => {
    if (message.trim()) {
      setPosts([...posts, message]);
      setMessage(''); // Limpar a mensagem após a publicação
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text>{item}</Text>
          </View>
        )}
      />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Digite sua mensagem do fórum..."
        />
        <Button title="Publicar" onPress={handlePublish} />
      </View>
    </KeyboardAvoidingView>
  );
}

