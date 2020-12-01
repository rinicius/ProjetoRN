import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CadastrarPerfil from "../views/Perfil/cadastrarPerfil";
import Perfil from "../views/Perfil/Perfil";

const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <TopTab.Navigator
      initialRouteName="Perfil"
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
        name="Perfil"
        component={Perfil}
        options={{
          unmountOnBlur: true,
          title: "ALUNOS",
        }}
      />

      <TopTab.Screen
        name="CadastrarPerfil"
        component={CadastrarPerfil}
        options={{
          unmountOnBlur: true,
          title: "CADASTRAR ALUNO",
        }}
      />
    </TopTab.Navigator>
  );
}

export default TopTabs;
