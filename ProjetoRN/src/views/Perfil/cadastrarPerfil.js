import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AlunosFB } from "../../firebase/alunosFB";

function CadastrarPerfil({ navigation, route }) {
  const [aluno, setAluno] = useState({});
  const [alert, setAlert] = useState(undefined);

  useEffect(() => {
    setAluno(route?.params ? route.params.alunos : {});
  }, [route.params]); // só atualiza quando o route.params atualizar

  const alunosFB = new AlunosFB();

  const adicionar = () => {
    if (aluno.nome != "") {
      alunosFB.create(aluno);
    } else {
      setAlert("Insira um valor para continuar");
    }
    setAluno({ nome: "", ano: "" });
    setAlert("Aluno adicionado com sucesso!");
  };

  const remover = () => {
    alunosFB.remove(aluno);
    setAluno({ nome: "", ano: "" });
    setAlert("Aluno removido com sucesso!");
  };

  const editar = () => {
    alunosFB.update(aluno);
    setAluno({ nome: "", ano: "" });
    setAlert("Aluno editado com sucesso!");
  };

  return (
    <View style={estilo.mainContainer}>
      <View style={{ paddingLeft: 20, marginTop: 25 }}></View>
      <View style={estilo.secContainer}>
        <Text style={estilo.titulo}>Cadastre um aluno!</Text>

        <TextInput
          placeholder="Digite o nome"
          placeholderTextColor={"#b8b8b8"}
          style={estilo.textInput}
          onChangeText={(nome) => {
            setAluno({ ...aluno, nome });
          }}
          value={aluno.nome}
        ></TextInput>
        <TextInput
          placeholder="Digite a turma"
          style={estilo.textInput}
          placeholderTextColor={"#b8b8b8"}
          onChangeText={(ano) => {
            setAluno({ ...aluno, ano });
          }}
          value={aluno.ano}
        ></TextInput>

        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            position: "relative",
            left: 70,
          }}
        ></View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={estilo.botao} onPress={adicionar}>
            <Text
              style={{ color: "#FFF", fontFamily: "Arial", fontWeight: "500" }}
            >
              Entrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.botao} onPress={remover}>
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Arial",
                fontWeight: "500",
              }}
            >
              Remover
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={estilo.botao} onPress={editar}>
            <Text
              style={{
                color: "#FFF",
                fontFamily: "Arial",
                fontWeight: "500",
              }}
            >
              Editar
            </Text>
          </TouchableOpacity>
        </View>

        {alert && (
          <Text
            style={{
              margin: 15,
              color: "#FFF",
              fontSize: 15,
              fontFamily: "Trebuchet MS",
            }}
          >
            {" "}
            {alert}
          </Text>
        )}
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#363636",
  },
  btnVoltar: {
    position: "relative",
    marginRight: "80%",
    marginTop: "10%",
    alignItems: "center",
    backgroundColor: "#444846",
    borderRadius: 50,
    padding: 11,
    width: 50,
  },
  titulo: {
    marginBottom: 5,
    fontSize: 26,
    color: "#FFF",
    fontFamily: "Trebuchet MS",
    fontWeight: "600",
  },
  secContainer: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    borderBottomWidth: 2,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 18,
    borderRadius: 5,
    height: 40,
    width: 300,
    paddingLeft: 10,
    fontWeight: "600",
    color: "#FFF",
  },
  botao: {
    alignItems: "center",
    padding: 15,
    minWidth: 200,
    borderWidth: 2,
    color: "white",
    marginTop: 30,
    marginHorizontal: 5,
    borderRadius: 40,
    backgroundColor: "#444846",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  botaoSwitch: {
    transform: [{ scaleX: 1.25 }, { scaleY: 1.25 }],
    position: "relative",
  },
  switchText: {
    fontFamily: "Trebuchet MS",
    fontSize: 15,
    fontWeight: "600",
    color: "#e7e7e7",
    marginEnd: 20,
  },
  subtitulo: {
    fontFamily: "Trebuchet MS",
    fontSize: 16,
    marginBottom: 25,
    color: "#e7e7e7",
  },
});

export default CadastrarPerfil;
