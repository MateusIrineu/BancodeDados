import AlunoView from "./src/modules/aluno/views/index.js";
import PromptSync from "prompt-sync";
import CriarTabelas from "./src/config/criar_tabela.js";

const input = PromptSync()

async function criarTabela() {
    try {
        await CriarTabelas.turma();
        await CriarTabelas.aluno();
        await CriarTabelas.professor();
        
    } catch (error) {
        console.log('Erro ao criar tabelas', error.message);
    }
}

criarTabela();

// const nome = input('Digite o nome do aluno: ');
// const email = input('Digite o e-mail do aluno: ');
// const matricula = input('Digite o matrícula do aluno: ');
// const telefone = input('Digite o telefone do aluno: ');
// const cod_turma = input('Digite o código do aluno: ');

// AlunoView.criar(nome, email, matricula, telefone, cod_turma);

// AlunoView.editar(nome, email, matricula, telefone, cod_turma);

// AlunoView.listarTodos();

// AlunoView.totalAlunos();

// AlunoView.deletarTodos();