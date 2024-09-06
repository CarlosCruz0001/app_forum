import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./style";

export default function HomePage({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.Container}>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.ButtonCreate}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("createUserPage")}>
          <Text style={styles.ButtonCreate}>Criar Usuário</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
