import { View, Text } from 'react-native';
import { styles } from './style';
import ChatCard from '../../components/chatCard/chatCard';

export default function ChatPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <View>
        <ChatCard letterUser= 'A' lastMensage='Olá' />
        <ChatCard letterUser= 'B' lastMensage='E o pix?' />
        <ChatCard letterUser= 'C' lastMensage='Bora lá hoje?' />
      </View>
    </View>
  )
}