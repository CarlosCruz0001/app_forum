import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

const ProfileLetter = ({ letterName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View>
          <Text style={styles.letter}>{letterName}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileLetter;
