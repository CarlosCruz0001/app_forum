import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <View>
         <Text style={styles.title}>Configurar</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput
           placeholder="Digite a letra do seu perfil"
           style={styles.inputLetra}
        />
        <TouchableOpacity style={styles.botaoPublicar}>
          <Text style={styles.textoBotao}>Alterar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.containerInput}>
        <TextInput
           placeholder="Digite sua biografia"
           style={styles.inputBio}
        />
        <TouchableOpacity style={styles.botaoPublicar}>
          <Text style={styles.textoBotao}>Alterar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}