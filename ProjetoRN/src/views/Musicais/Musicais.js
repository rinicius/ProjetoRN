import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Musical from "../../components/MusicaisContainer/Musical";

function Musicais({ navigate }) {
  const [data, setData] = useState([
    {
      titulo: "Rei Leão",
      localizacao: "Brodway/Brasil",
      sinopse:
        "Este musical infantil conta a história de Simba, um pequeno leãozinho que é filho de Mufasa, o ReiLeão, e da rainha Sarabi. O recém-nascido recebe a bênção do sábio macaco Rafiki mas, ao crescer, é envolvido nas artimanhas de seu tio Scar, o invejoso e maquiavélico irmão de Mufasa, que planeja livrar-se do sobrinho e herdar o trono.",
      imagem: "reileao",
      imagembg: "musical1",
    },
    {
      titulo: "Anastasia",
      localizacao: "Brodway/Brasil",
      sinopse: "",
      imagem: "anastasia",
      imagembg: "musical1",
    },
    {
      titulo: "Hamilton",
      localizacao: "Brodway/Brasil",
      sinopse: "",
      imagem: "hamilton",
      imagembg: "musical1",
    },
    {
      titulo: "Wicked",
      localizacao: "Brodway/Brasil",
      sinopse: "",
      imagem: "wicked",
      imagembg: "musical1",
    },
    {
      titulo: "Frozen",
      localizacao: "Brodway/Brasil",
      sinopse: "",
      imagem: "frozen",
      imagembg: "musical1",
    },
    {
      titulo: "Dear Evan Hasen",
      localizacao: "Brodway/Brasil",
      sinopse: "",
      imagem: "dear",
      imagembg: "musical1",
    },
  ]);
  return (
    <View style={estilo.mainContainer}>
      <View style={{ alignItems: "center" }}>
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
    paddingTop: "7%",
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
