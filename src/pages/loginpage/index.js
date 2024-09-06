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


export default function LoginPage() {
  <View>
    <Text>Login</Text>
    <TouchableOpacity onPress={() => navigation.navigate("app")}>
      <Text>Logar</Text>
    </TouchableOpacity>
  </View>;
}
