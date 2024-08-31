import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    padding: 8,
    alignItems: "center",
    backgroundColor: "#fef5c8",
  },
  title: {
    fontSize: 24,
  },
  containerInput: {
    display: "flex",
    alignItems: "row",
    marginTop: 20,
  },
  inputLetra: {
    borderWidth: 1,
    height: 50,
    width: 290,
    borderRadius: 30,
    paddingLeft: 15,
  },
  inputBio: {
    borderWidth: 1,
    height: 300,
    width: 290,
    borderRadius: 30,
    paddingLeft: 15,
  },
  botaoPublicar: {
    borderRadius: 30,
    backgroundColor: "#013750",
    width: 100,
    height: 60,
    margin: 10,
    alignSelf: 'center',
    alignItems:'center',
  },

  textoBotao:{
    color: '#f23e02',
    fontSize:20,
    marginTop:13,
    marginBottom:13,
  }
});
