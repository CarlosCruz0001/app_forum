import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useState } from 'react';
import { styles } from "./styles";


export default function CreateUserPage() {
  const db = useSQLiteContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [letter, setLetter] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const onSubmit = (e) => {
    const data ={
      name,
      email,
      password,
      letter,
    }
    addUser(data);
  }



  const addUser = async (novoUsuario) => {
    try {
      const query = await db.prepareAsync('INSERT INTO usuario (name, email, password, letter) VALUES (?, ?, ?, ?)')
      await query.executeAsync([novoUsuario.name, novoUsuario.email, novoUsuario.password, novoUsuario.letter]);
      await getUsuarios();
      alert('Usuário Cadastrado com sucesso!')
    } catch (error) {
      console.log('Erro ao adicionar o usuário', error)
      alert('Erro ao cadastrar o usuário')
    }
  }

  const getUsuarios = async () => {
    try {
      const todosRegistros = await db.getAllAsync('SELECT * FROM usuario');
      setUsuarios(todosRegistros);
    } catch (error) {
      console.log('Erro ao ler os dados dos usuários: ', error)
    }
  };

  console.log(usuarios);

  return(
  <View style={styles.container}>
    <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite uma única letra"
        value={letter}
        onChangeText={setLetter}
        maxLength={1} 
      />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
  </View>
  )
}
