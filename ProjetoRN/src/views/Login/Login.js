import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistro = () => {
    navigation.navigate("Registro");
  };

  const avancar = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={estilo.secContainer}>
      <Image
        source={require("../../../assets/logo.png")}
        style={estilo.imagem}
      ></Image>
      <View style={estilo.mainContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#b8b8b8"}
          onChangeText={(email) => setEmail(email)}
          style={estilo.txtbox}
          value={email}
        ></TextInput>
        <TextInput
          placeholder="Senha"
          placeholderTextColor={"#b8b8b8"}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          style={[estilo.txtbox, { marginBottom: 13 }]}
          value={password}
        ></TextInput>

        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={estilo.botao} onPress={avancar}>
            <Text
              style={{ color: "#FFF", fontFamily: "Arial", fontWeight: "500" }}
            >
              Entrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[estilo.botao, { backgroundColor: "#444846" }]}
            onPress={handleRegistro}
          >
            <Text
              style={{ color: "white", fontFamily: "Arial", fontWeight: "500" }}
            >
              Registrar-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  secContainer: {
    flex: 1,
    backgroundColor: "#4C514E",
    alignItems: "center",
  },
  txtbox: {
    borderBottomWidth: 2,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 12,
    borderRadius: 5,
    height: 40,
    width: 300,
    paddingLeft: 10,
    fontWeight: "600",
  },
  botao: {
    alignItems: "center",
    padding: 15,
    minWidth: 200,
    borderWidth: 2,
    color: "white",
    marginTop: 10,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  imagem: {
    top: "20%",
    height: 200,
    width: 200,
  },
});

export default Login;
