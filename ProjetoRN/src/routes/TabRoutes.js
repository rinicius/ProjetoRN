import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home/Home";
import Musicais from "../views/Musicais/Musicais";
import Filmes from "../views/Filmes/Filmes";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const icones = {
  Filmes: "clapperboard",
  Musicais: "ticket",
  Home: "home",
};

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
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
        component={Musicais}
        options={{
          unmountOnBlur: true,
        }}
      />

      <Tab.Screen
        name="Filmes"
        component={Filmes}
        options={{
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
