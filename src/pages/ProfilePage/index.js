import { View, Text } from "react-native";
import { styles } from "./style";
import ProfileLetter from "../../components/ProfileComponent";

export default function ProfilePage({letterProfile}) {

  console.log('texto',letterProfile);
  
  return (
    <View style={styles.container}>
      <ProfileLetter letterName={letterProfile.profile} />

      <View>
        <Text style={styles.info}>Sobre mim</Text>
      </View>

      <View>
        <Text style={styles.bio}>
          {letterProfile.text}
        </Text>
      </View>
    </View>
  );
}
