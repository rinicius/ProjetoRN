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

function Musical({ data }) {
  const [musical, setMusical] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);
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
    prince: {
      uri: require("../../../assets/musicais/prince.jpg"),
    },
    silvio: {
      uri: require("../../../assets/musicais/silvio.jpg"),
    },
  });
  const [imagensbg, setImagensbg] = useState({
    musical1: {
      uri: require("../../../assets/musical1.jpg"),
    },
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
              source={imagensbg[musical.imagembg].uri}
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
              <View style={{ alignItems: "center", marginTop: "23%" }}>
                <Text style={estilo.textStyle}>{musical.titulo}</Text>
                <Text style={estilo.local}>{musical.localizacao}</Text>
              </View>
            </ImageBackground>
            <Text style={estilo.titulo}>Sinopse</Text>
            <Text style={estilo.textoNoticia}>{musical.sinopse} </Text>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={handlePress}>
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
    </View>
  );
}

const estilo = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontFamily: "Trebuchet MS",
    fontSize: 20,
    marginTop: 18,
    color: "#FFF",
    fontWeight: "600",
    marginRight: "70%",
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
  local: {
    color: "white",
    fontFamily: "Trebuchet MS",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  textStyle: {
    color: "white",
    maxWidth: 300,
    fontFamily: "Trebuchet MS",
    fontSize: 25,
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
    marginTop: 15,
    fontFamily: "Trebuchet MS",
    fontSize: 18,
  },
  copyright: {
    fontFamily: "Trebuchet MS",
    fontSize: 16,
  },
});

export default Musical;
