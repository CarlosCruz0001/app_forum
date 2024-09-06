import React from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../pages/appPage";
import CreateUserPage from "../pages/createUserPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginpage";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homePage"
        component={HomePage}
        options={{
          title: "",
          headerTintColor: "#FFF",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginPage}
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
          title: "",
          headerTintColor: "#FFF",
          headerTransparent: true,
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
