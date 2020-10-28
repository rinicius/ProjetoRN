import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Musical from "../../components/MusicaisContainer/Musical";

function Musicais({ navigate }) {
  const [data, setData] = useState([
    {
      titulo: "Rei Leão",
      imagem: "reileao",
    },
    {
      titulo: "Anastasia",
      imagem: "anastasia",
    },
    {
      titulo: "Hamilton",
      imagem: "hamilton",
    },
    {
      titulo: "Wicked",
      imagem: "wicked",
    },
    {
      titulo: "Frozen",
      imagem: "frozen",
    },
    {
      titulo: "Dear Evan Hasen",
      imagem: "dear",
    },
  ]);
  return (
    <View style={estilo.mainContainer}>
      <View style={estilo.borda}>
        <Text style={estilo.titulo}>Musicais!</Text>
      </View>
      <View style={estilo.secContainer}>
        <View
          style={{
            marginTop: "5%",
          }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={data}
            keyExtractor={(data) => data.titulo}
            renderItem={({ item }) => <Musical data={item} />}
          />
        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#363636",
    flex: 1,
  },
  secContainer: {
    flex: 1,
    alignItems: "center",
  },
  titulo: {
    paddingTop: "12%",
    paddingBottom: 10,
    fontFamily: "Trebuchet MS",
    fontSize: 26,
    fontWeight: "600",
    color: "white",
  },
  subtitulo: {
    marginRight: "50%",
    paddingTop: "5%",
    fontFamily: "Trebuchet MS",
    fontSize: 22,
    fontWeight: "600",
    color: "#00A6FF",
  },
  borda: {
    marginLeft: "10%",

    borderBottomWidth: 2,
    borderBottomColor: "#00A6FF",
  },
});

export default Musicais;
