import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Musical from "../../components/MusicaisContainer/Musical";

function EmBreveMusi({ navigate }) {
  const [musicais, setMusicais] = useState([
    {
      titulo: "O Príncipe do Egito",
      imagem: "prince",
      localizacao: "Brodway/Brasil",
      imagembg: "musical1",
      sinopse: "",
    },
    {
      titulo: "Silvio Santos Vem Aí",
      imagem: "silvio",
      localizacao: "Brodway/Brasil",
      imagembg: "musical1",
      sinopse: "",
    },
  ]);
  return (
    <View style={estilo.mainContainer}>
      <View style={estilo.tituloBorder}>
        <Text style={estilo.titulo}>Musicais! </Text>
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
          data={musicais}
          keyExtractor={(item) => item.titulo}
          renderItem={({ item }) => {
            return <Musical data={item} />;
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

export default EmBreveMusi;
