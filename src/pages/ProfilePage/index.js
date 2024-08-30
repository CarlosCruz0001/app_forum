import { View, Text } from "react-native";
import { styles } from "./style";
import ProfileLetter from "../../components/ProfileComponent";

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <ProfileLetter letterName="C" />

      <View>
        <Text style={styles.info}>Sobre mim</Text>
      </View>

      <View>
        <Text style={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus
          metus, dictum et efficitur quis, accumsan sed lorem. Nullam dignissim.
        </Text>
      </View>
    </View>
  );
}
