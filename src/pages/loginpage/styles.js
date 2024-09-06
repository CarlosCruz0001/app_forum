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
        color:'white',
      },
      input: {
        width: '80%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
      },
      button: {
        width: '40%',
        padding: 15,
        backgroundColor: '#013750',
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#f23e02',
        fontSize: 16,
        fontWeight: 'bold',
      },
      CreateUserPage:{
        marginTop:28,
        color:'white'
      }
});
