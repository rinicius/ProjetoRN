import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function Perfil({ navigate }) {
  return (
    <View style={estilo.mainContainer}>
      <View style={estilo.tituloBorder}>
        <View style={estilo.borda}>
          <Text style={estilo.titulo}>Alunos</Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image
          source={require("../../../assets/perfil1.jpeg")}
          style={estilo.imagem}
        />
        <Text style={estilo.subtitulo}>Vinicius Rocha</Text>
        <Text style={estilo.subsubtitulo}>3º MIB(B)</Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image
          source={require("../../../assets/perfil2.jpg")}
          style={estilo.imagem}
        />
        <Text style={estilo.subtitulo}>Kathellin Bianca</Text>
        <Text style={estilo.subsubtitulo}>3º MIB(B)</Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#363636",
  },
  titulo: {
    paddingTop: "12%",
    paddingBottom: 10,
    fontFamily: "Trebuchet MS",
    fontSize: 26,
    fontWeight: "600",
    color: "white",
  },
  borda: {
    borderBottomWidth: 2,
    borderBottomColor: "#00A6FF",
  },
  tituloBorder: {
    marginLeft: "10%",
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

export default Perfil;
