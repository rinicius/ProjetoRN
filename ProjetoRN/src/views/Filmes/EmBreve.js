import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import FilmesContainer from "../../components/FilmesContainer/FilmesContainer";

function EmBreve({ navigate }) {
  const [filmes, setFilmes] = useState([
    {
      titulo: "In The Heights",
      imagem: "imagem1",
    },
    {
      titulo: "Everybody's Talking About Jamie",
      imagem: "imagem2",
    },
    {
      titulo: "Respect",
      imagem: "imagem3",
    },
    {
      titulo: "Praise This",
      imagem: "imagem4",
    },
    {
      titulo: "The Prom",
      imagem: "imagem5",
    },
    {
      titulo: "West Side Story",
      imagem: "imagem6",
    },
  ]);
  return (
    <View style={estilo.mainContainer}>
      <View style={estilo.tituloBorder}>
        <Text style={estilo.titulo}>Filmes e Séries </Text>
      </View>
      <View
        style={{
          marginTop: "5%",
          alignItems: "center",
        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={filmes}
          keyExtractor={(item) => item.titulo}
          renderItem={({ item }) => {
            return <FilmesContainer data={item} />;
          }}
        />
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
});

export default EmBreve;
