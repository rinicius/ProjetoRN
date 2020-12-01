import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import AlunosContainer from "../../components/alunosContainer/alunosContainer";
import { AlunosFB } from "../../firebase/alunosFB";

function Perfil({ navigation }) {
  const [alunos, setAlunos] = useState();

  const alunosFB = new AlunosFB();

  useEffect(() => {
    alunosFB
      .read()
      .orderBy("nome")
      .onSnapshot((query) => {
        const items = [];
        query.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setAlunos(items);
      });
  }, []);

  const carregar = (item) => {
    navigation.jumpTo("CadastrarPerfil", { alunos: item });
  };

  return (
    <View style={estilo.mainContainer}>
      <View style={estilo.tituloBorder}>
        <Text style={estilo.titulo}>Alunos</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={alunos}
        keyExtractor={(alunos) => alunos.id}
        renderItem={({ item }) => (
          <AlunosContainer data={item} detalhe={() => carregar(item)} />
        )}
        style={{ marginBottom: 20, marginTop: 20 }}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#363636",
  },
  titulo: {
    paddingTop: "7%",
    fontFamily: "Trebuchet MS",
    fontSize: 26,
    fontWeight: "600",
    color: "white",
  },

  tituloBorder: {
    alignItems: "center",
  },
});

export default Perfil;
