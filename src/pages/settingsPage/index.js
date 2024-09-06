import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";

export default function SettingsPage({ setLetterPerfil, navigation }) {
  const [valueInput, setValueInput] = useState({ profile: "", text: "" });

  
  const updateProfileLetter = (profile) => {
    setValueInput((prevState) => ({ ...prevState, profile: profile }));
  };


  const updateBio = (text) => {
    setValueInput((prevState) => ({ ...prevState, text: text }));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Configurar</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite a letra do seu perfil"
          style={styles.inputLetra}
          onChangeText={updateProfileLetter}
          inputMode="string"
          value={valueInput.profile}
        />
        <TouchableOpacity
          style={styles.botaoPublicar}
          onPress={() =>
            setLetterPerfil((prevState) => ({
              ...prevState,
              profile: valueInput.profile,
            }))
          }
        >
          <Text style={styles.textoBotao}>Alterar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite sua biografia"
          style={styles.inputBio}
          onChangeText={updateBio}
          value={valueInput.text}
        />
        <TouchableOpacity
          style={styles.botaoPublicar}
          onPress={() => setLetterPerfil((prevState) => ({ ...prevState, text: valueInput.text }))}
        >
          <Text style={styles.textoBotao}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoPublicar} onPress={() => navigation.navigate('login')}>
          <Text style={styles.textoBotao}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
