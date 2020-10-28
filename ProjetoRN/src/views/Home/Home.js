import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import NoticiaContainer from "../../components/NoticiaContainer/NoticiaContainer";

function Home({ navigate }) {
  const [noticias, setNoticias] = useState([
    {
      index: "0",
      imagem: "noticia1",
      titulo: "Broadway prolonga fechamento dos teatros até 7 de junho",
      texto:
        "Os teatros da Broadway, que estão entre as atrações turísticas mais visitadas da cidade de Nova York, continuarão fechados até 7 de junho devido ao surto global de coronavírus, informou um grupo da indústria nesta quarta-feira. Os teatros baixaram as portas em 12 de março, supostamente por um mês, enquanto as autoridades faziam um apelo às pessoas a evitarem multidões. Ler mais...",
    },
    {
      index: "1",
      imagem: "noticia2",
      titulo:
        "Universal transmitirá peças da Broadway de graça no Youtube durante quarentena",
    },
  ]);
  return (
    <View style={estilo.mainContainer}>
      <View style={estilo.tituloBorder}>
        <View style={estilo.borda}>
          <Text style={estilo.titulo}>Notícias de musicais </Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={noticias}
          keyExtractor={(noticia) => noticia.index}
          renderItem={({ item }) => {
            return <NoticiaContainer data={item} />;
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
    marginLeft: "10%",
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
  subtitulo: {
    marginRight: "50%",
    paddingTop: "5%",
    fontFamily: "Trebuchet MS",
    fontSize: 22,
    fontWeight: "600",
    color: "#00A6FF",
  },
});

export default Home;
