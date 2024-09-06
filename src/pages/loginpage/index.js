import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./style";
import { useSQLiteContext } from "expo-sqlite";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const db = useSQLiteContext(); 

  const loginUser = async (email, password) => {
    try {
      
      const todosRegistros = await db.getAllAsync('SELECT * FROM usuario');

      
      const usuarioEncontrado = todosRegistros.find(usuario => usuario.email === email && usuario.password === password);

      if (usuarioEncontrado) {
       
        const usuarioArray = [usuarioEncontrado];
        const letraPerfil = usuarioEncontrado.letter || ''; 

        console.log(usuarioArray);
        console.log('Letra do perfil:', letraPerfil);

        
        navigation.navigate("app", { usuario: usuarioArray, letraPerfil: letraPerfil });
      } else {
        Alert.alert("Erro", "Email ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro ao consultar o banco de dados", error);
      Alert.alert("Erro", "Ocorreu um erro ao tentar realizar o login.");
    }
  };

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Atenção", "Por favor, preencha todos os campos."); 
    } else {
      loginUser(email, password); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("createUserPage")}>
          <Text style={styles.CreateUserPage}>Criar Usuário</Text>
        </TouchableOpacity>
    </View>
  );
}
