import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { AlunosFB } from "../../firebase/alunosFB";

function AlunosContainer({ data, detalhe }) {
  return (
    <TouchableOpacity onPress={detalhe}>
      <View style={estilo.mainContainer}>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          {/* <Image source={imagens[data.img].uri} style={estilo.imagem} /> */}
          <Text style={estilo.subtitulo}>{data.nome}</Text>
          <Text style={estilo.subsubtitulo}>{data.ano}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const estilo = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#363636",
    marginBottom: 10,
  },
  titulo: {
    paddingTop: "7%",
    fontFamily: "Trebuchet MS",
    fontSize: 26,
    fontWeight: "600",
    color: "white",
  },

  tituloBorder: {
    alignItems: "center",
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginTop: 25,
  },
  subtitulo: {
    marginTop: 10,
    fontFamily: "Trebuchet MS",
    fontSize: 22,
    fontWeight: "600",
    color: "#00A6FF",
  },
  subsubtitulo: {
    fontFamily: "Trebuchet MS",
    fontSize: 16,
    fontWeight: "600",
    color: "#00A6FF",
  },
});

export default AlunosContainer;
