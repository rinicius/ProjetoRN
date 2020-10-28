import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

function Musical({ data }) {
  const [musical, setMusical] = useState(data);
  const [imagens, setImagens] = useState({
    reileao: {
      uri: require("../../../assets/musicais/reileao.png"),
    },
    anastasia: {
      uri: require("../../../assets/musicais/anastasia.jpg"),
    },
    hamilton: {
      uri: require("../../../assets/musicais/hamilton.jpg"),
    },
    wicked: {
      uri: require("../../../assets/musicais/wi.jpg"),
    },
    frozen: {
      uri: require("../../../assets/musicais/frozen.jpg"),
    },
    dear: {
      uri: require("../../../assets/musicais/dear.jpg"),
    },
  });
  return (
    <TouchableOpacity>
      <View style={{ margin: 5, alignItems: "center", marginBottom: 15 }}>
        <Image
          source={imagens[musical.imagem].uri}
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
          }}
        >
          {musical.titulo}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Musical;
