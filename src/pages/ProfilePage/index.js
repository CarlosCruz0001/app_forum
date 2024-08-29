import { View, Text } from 'react-native';
import { styles } from './style';

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View>
          <Text style={styles.letter}>P</Text>
        </View>
      </View>

      <View>     
        <Text style={styles.info}>Sobre mim</Text>
      </View>

      <View>     
        <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus metus, dictum et efficitur quis, accumsan sed lorem. Nullam dignissim.</Text>
      </View>
    </View>

  )
}