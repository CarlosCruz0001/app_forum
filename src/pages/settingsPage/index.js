import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useState } from "react";

export default function SettingsPage({ setLetterPerfil }) {
  const [valueInput, setValueInput] = useState({ profile: "", text: "" });

  // Função para atualizar a letra do perfil
  const updateProfileLetter = (profile) => {
    setValueInput((prevState) => ({ ...prevState, profile: profile }));
  };

  // Função para atualizar a biografia
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
        />
        <TouchableOpacity
          style={styles.botaoPublicar}
          onPress={() => setLetterPerfil((prevState) => ({ ...prevState, text: valueInput.text }))}
        >
          <Text style={styles.textoBotao}>Alterar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
