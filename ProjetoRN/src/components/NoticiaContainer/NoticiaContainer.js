import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const NoticiaContainer = ({ data }) => {
  const [noticia, setNoticia] = useState(data);
  const [imagens, setImagens] = useState({
    noticia1: { uri: require("../../../assets/noticia1.jpg") },
    noticia2: { uri: require("../../../assets/noticia2.jpg") },
  });
  return (
    <View>
      <TouchableOpacity>
        <Image
          transition={false}
          source={imagens[noticia.imagem].uri}
          style={{ height: 165, width: 307, borderRadius: 10, marginTop: "5%" }}
        />
        <View style={{ maxWidth: 307, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: 20,
              color: "#FFF",
              margin: 10,
            }}
          >
            {noticia.titulo}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NoticiaContainer;
