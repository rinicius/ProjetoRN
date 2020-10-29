import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Filmes from "../views/Filmes/Filmes";
import EmBreve from "../views/Filmes/EmBreve";

import { setStatusBarBackgroundColor } from "expo-status-bar";

const TopTab = createMaterialTopTabNavigator();

function TopTabsMusicais() {
  return (
    <TopTab.Navigator
      initialRouteName="EmCartaz"
      tabBarOptions={{
        tabStyle: {
          height: 70,
          justifyContent: "center",
        },
        labelStyle: {
          marginTop: 10,
          fontFamily: "Trebuchet MS",
          fontWeight: "500",
          fontSize: 16,
        },
        showLabel: true,
        style: {
          backgroundColor: "#484E4A",
        },
        activeTintColor: "#FFF",
        inactiveTintColor: "#b8b8b8",
      }}
    >
      <TopTab.Screen
        name="EmCartaz"
        component={Filmes}
        options={{
          unmountOnBlur: true,
          title: "EM CARTAZ",
        }}
      />

      <TopTab.Screen
        name="EmBreve"
        component={EmBreve}
        options={{
          unmountOnBlur: true,
          title: "EM BREVE",
        }}
      />
    </TopTab.Navigator>
  );
}

export default TopTabsMusicais;
