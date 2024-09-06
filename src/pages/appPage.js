import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

// importação das telas
import ChatPage from "./chatPage/index";
import ForumPage from "./ForumPage/index";
import SettingsPage from "./settingsPage/index";
import { useState } from "react";
import ProfileWrapper from "./profileWrapper/index";

const Tab = createBottomTabNavigator();

export default function App() {
  const [letterPerfil, setLetterPerfil] = useState({ profile: "", text: "" });
  console.log(letterPerfil);

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: "#013750",
          tabBarActiveBackgroundColor: "#2c6b74",
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#fef5c8",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={ForumPage}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          children={() => <ProfileWrapper letterPerfil={letterPerfil} />}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatPage}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="chat" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          children={() => <SettingsPage setLetterPerfil={setLetterPerfil} />}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
