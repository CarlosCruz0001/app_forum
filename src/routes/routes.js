import React from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../pages/appPage";
import CreateUserPage from "../pages/createUserPage";
import Loginpage from "../pages/loginPage";


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Loginpage}
        options={{
          title: "",
          headerTintColor: "#FFF",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="app"
        component={App}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="createUserPage"
        component={CreateUserPage}
        options={{
          title: "",
          headerTintColor: "#FFF",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
