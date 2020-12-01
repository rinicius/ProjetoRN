import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  Alert,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Registro({ navigation }) {
  const [btnswitch, setBtnSwitch] = useState(false);
  const voltar = () => {
    navigation.goBack();
  };

  const btnSwitch = () => {
    setBtnSwitch(!btnswitch);
  };

  const avancar = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={estilo.mainContainer}>
      <View style={{ paddingLeft: 20 }}>
        <TouchableOpacity onPress={voltar} style={estilo.btnVoltar}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={estilo.secContainer}>
        <Text style={estilo.titulo}>Crie sua conta!</Text>
        <Text style={estilo.subtitulo}>Use todos as funções do aplicativo</Text>

        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor={"#b8b8b8"}
          style={estilo.textInput}
        ></TextInput>
        <TextInput
          placeholder="Repita seu email"
          style={estilo.textInput}
          placeholderTextColor={"#b8b8b8"}
        ></TextInput>
        <TextInput
          placeholder="Digite sua senha"
          style={estilo.textInput}
          placeholderTextColor={"#b8b8b8"}
        ></TextInput>
        <TextInput
          placeholder="Repita sua senha"
          placeholderTextColor={"#b8b8b8"}
          style={estilo.textInput}
        ></TextInput>
        <TextInput
          placeholder="Digite seu CPF"
          style={estilo.textInput}
          placeholderTextColor={"#b8b8b8"}
        ></TextInput>
        <TextInput
          placeholder="Selecione seu sexo"
          placeholderTextColor={"#b8b8b8"}
          style={estilo.textInput}
        ></TextInput>

        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            position: "relative",
            left: 70,
          }}
        >
          <Text style={estilo.switchText}>Aceito os termos</Text>
          <Switch
            style={estilo.botaoSwitch}
            onValueChange={btnSwitch}
            value={btnswitch}
          />
        </View>

        <TouchableOpacity style={estilo.botao} onPress={avancar}>
          <Text
            style={{ color: "#FFF", fontFamily: "Arial", fontWeight: "500" }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#4C514E",
  },
  btnVoltar: {
    position: "relative",
    marginRight: "80%",
    marginTop: "10%",
    alignItems: "center",
    backgroundColor: "#444846",
    borderRadius: 50,
    padding: 11,
    width: 50,
  },
  titulo: {
    marginBottom: 5,
    fontSize: 26,
    color: "#FFF",
    fontFamily: "Trebuchet MS",
    fontWeight: "600",
  },
  secContainer: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    borderBottomWidth: 2,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 18,
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
    marginTop: 30,
    borderRadius: 40,
    backgroundColor: "#444846",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  botaoSwitch: {
    transform: [{ scaleX: 1.25 }, { scaleY: 1.25 }],
    position: "relative",
  },
  switchText: {
    fontFamily: "Trebuchet MS",
    fontSize: 15,
    fontWeight: "600",
    color: "#e7e7e7",
    marginEnd: 20,
  },
  subtitulo: {
    fontFamily: "Trebuchet MS",
    fontSize: 16,
    marginBottom: 25,
    color: "#e7e7e7",
  },
});

export default Registro;
