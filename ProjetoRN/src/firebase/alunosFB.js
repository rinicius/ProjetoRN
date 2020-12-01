import { conexaoFS } from "./ConnectConfig";

export class AlunosFB {
  state = {
    alunos: conexaoFS.collection("/alunos"),
  };

  read() {
    return this.state.alunos;
  }

  remove(aluno) {
    this.state.alunos.doc(aluno.id).delete();
  }

  create(aluno) {
    this.state.alunos.add(aluno);
  }

  update(aluno) {
    const { id } = aluno;
    delete aluno.id;

    this.state.alunos.doc(id).update(aluno);
  }
}
