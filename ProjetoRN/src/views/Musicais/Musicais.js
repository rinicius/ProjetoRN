import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

function Musicais({ navigate }) {
  return (
    <View style={estilo.mainContainer}>
      <View style={estilo.secContainer}>
        <Text style={estilo.texto}>Musicais!</Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#363636",
  },
  secContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontFamily: "Arial",
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});

export default Musicais;
