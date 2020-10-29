import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

function FilmesContainer({ data }) {
  const [filme, setFilme] = useState(data);
  const [imagens, setImagens] = useState({
    imagem1: {
      uri: require("../../../assets/musicais/in.jpg"),
    },
    imagem2: {
      uri: require("../../../assets/musicais/jamie.jpg"),
    },
    imagem3: {
      uri: require("../../../assets/musicais/res.jpg"),
    },
    imagem4: {
      uri: require("../../../assets/musicais/wi.jpg"),
    },
    imagem5: {
      uri: require("../../../assets/musicais/prom.jpg"),
    },
    imagem6: {
      uri: require("../../../assets/musicais/wes.jpg"),
    },
  });
  return (
    <View style={{ margin: 5, alignItems: "center", marginBottom: 15 }}>
      <TouchableOpacity>
        <Image
          source={imagens[filme.imagem].uri}
          style={{
            height: 524 * 0.28,
            width: 400 * 0.28,
          }}
          transition={false}
        />
        <Text
          style={{
            paddingTop: "5%",
            fontFamily: "Trebuchet MS",
            fontSize: 18,
            fontWeight: "600",
            color: "#FFF",
            maxWidth: 400 * 0.28,
            textAlign: "center",
          }}
        >
          {filme.titulo}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default FilmesContainer;
