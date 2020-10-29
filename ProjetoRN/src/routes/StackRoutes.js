import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../views/Login/Login";
import Registro from "../views/Registro/Registro";
import Tab from "./TabRoutes";

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Tab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
