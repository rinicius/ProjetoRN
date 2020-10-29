import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";

const NoticiaContainer = ({ data }) => {
  const [noticia, setNoticia] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);
  const [imagens, setImagens] = useState({
    noticia1: { uri: require("../../../assets/noticia1.jpg") },
    noticia2: { uri: require("../../../assets/noticia2.jpg") },
  });

  const [imagensbg, setImagensbg] = useState({
    noticia1: { uri: require("../../../assets/noticiaBg1.jpg") },
    noticia2: { uri: require("../../../assets/noticia2.jpg") },
  });

  const handlePress = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={estilo.centeredView}>
          <View style={estilo.modalView}>
            <ImageBackground
              source={imagensbg[noticia.imagembg].uri}
              style={{ width: 400, height: 220 }}
              transition={false}
            >
              <View style={estilo.botaoView}>
                <TouchableOpacity
                  style={{ ...estilo.openButton, backgroundColor: "#000000" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={estilo.textStyle}>X</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", marginTop: "20%" }}>
                <Text style={estilo.textStyle}>{noticia.titulo}</Text>
              </View>
            </ImageBackground>
            <Text style={estilo.textoNoticia}>{noticia.texto} </Text>
            <Text style={estilo.copyright}> {noticia.copyright} </Text>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={handlePress}>
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

const estilo = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    marginTop: "20%",
    backgroundColor: "#363636",
    height: "89%",
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#000000",
    minWidth: 40,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 10,
  },
  textStyle: {
    color: "white",
    maxWidth: 300,
    fontFamily: "Trebuchet MS",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 25,
    width: 320,
    marginBottom: 15,
    textAlign: "center",
  },
  botaoView: {
    marginTop: "5%",
    marginRight: "75%",
  },
  textoNoticia: {
    color: "#FFF",
    marginLeft: 18,
    marginRight: 20,
    marginTop: 18,
    fontFamily: "Trebuchet MS",
    fontSize: 18,
  },
  copyright: {
    fontFamily: "Trebuchet MS",
    fontSize: 16,
  },
});

export default NoticiaContainer;
