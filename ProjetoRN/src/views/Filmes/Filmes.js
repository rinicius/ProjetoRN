import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

function Filmes({ navigate }) {
  return (
    <View style={estilo.mainContainer}>
      <View style={estilo.tituloBorder}>
        <Text style={estilo.titulo}>Filmes</Text>
        <Text style={estilo.text}>
          Por conta do COVID-19 os cinemas estão temporariamente fechados, por
          tanto não há filmes em cartaz.
        </Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#363636",
  },
  tituloBorder: {
    alignItems: "center",
  },
  titulo: {
    paddingTop: "7%",
    fontFamily: "Trebuchet MS",
    fontSize: 26,
    fontWeight: "600",
    color: "white",
  },
  borda: {
    borderBottomWidth: 2,
    borderBottomColor: "#00A6FF",
  },
  text: {
    maxWidth: 320,
    fontFamily: "Trebuchet MS",
    marginTop: 15,
    fontSize: 18,
    color: "#976DD0",
  },
});

export default Filmes;
