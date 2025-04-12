import AlunoView from "./modules/aluno/views/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync()

// const nome = input('Digite o nome do aluno: ');
// const email = input('Digite o e-mail do aluno: ');
// const matricula = input('Digite o matrícula do aluno: ');
// const telefone = input('Digite o telefone do aluno: ');
// const cod_turma = input('Digite o código do aluno: ');

// AlunoView.criar(nome, email, matricula, telefone, cod_turma);

// AlunoView.editar(nome, email, matricula, telefone, cod_turma);

// AlunoView.listarTodos();

// AlunoView.totalAlunos();

AlunoView.deletarTodos();