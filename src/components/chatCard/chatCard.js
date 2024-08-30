import React from "react";
import ProfileLetter from "../ProfileComponent";
import { View, Text } from 'react-native';
import { styles } from "./style";



const ChatCard = ({letterUser, lastMensage}) => {
    return(
        <View style={styles.contaier}>
            <View>
                <ProfileLetter letterName={letterUser}/>
            </View>

            <View style={styles.lastMenssageContainer}>
                <Text style={styles.lastMenssage}>{lastMensage}</Text>
            </View>
        </View>
    );
}

export default ChatCard