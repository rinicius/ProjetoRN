import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home/Home";
import TopTabsMusicais from "./topTabRoutes2";
import TopTabs from "./topTabRoutes";
import { Entypo } from "@expo/vector-icons";
import Perfil from "../views/Perfil/Perfil";
import topTabRoutesPerfil from "./topTabRoutesPerfil";

const Tab = createBottomTabNavigator();

const icones = {
  Filmes: "clapperboard",
  Musicais: "ticket",
  Home: "home",
  Perfil: "user",
};

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Perfil"
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "#484E4A" },
        inactiveTintColor: "#000",
        activeTintColor: "#FFF",
        activeBackgroundColor: "#484E4A",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          return <Entypo name={icones[route.name]} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
        }}
      />

      <Tab.Screen
        name="Musicais"
        component={TopTabsMusicais}
        options={{
          unmountOnBlur: true,
        }}
      />

      <Tab.Screen
        name="Filmes"
        component={TopTabs}
        options={{
          unmountOnBlur: true,
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={topTabRoutesPerfil}
        options={{
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
