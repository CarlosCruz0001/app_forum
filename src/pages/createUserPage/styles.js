import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#006660",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
      },
      input: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
      },
      button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#28a745',
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
