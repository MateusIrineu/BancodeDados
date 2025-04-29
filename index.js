import PromptSync from "prompt-sync";
import AlunoView from "./src/modules/aluno/views/index.js";
import ProfessorView from "./src/modules/professor/views/index.js";
import TurmaView from "./src/modules/turma/views/index.js";
import CriarTabelas from "./src/config/criar_tabela.js";


const input = PromptSync()


async function criarTabela() {
    try {
        await CriarTabelas.aluno();
        await CriarTabelas.professor();
        await CriarTabelas.turma();
        
    } catch (error) {
        console.log('Erro ao criar tabelas', error.message);
    }
}


async function menu() {
    await criarTabela();

    const opcoes = [
        "1 - Menu Alunos",
        "2 - Menu Professores",
        "3 - Menu Turmas",
        "0 - Sair"
    ];

    let opcao;
    do {
        console.clear();
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                await menuAlunos();
                break;
            case "2":
                await menuProfessores();
                break;
            case "3":
                await menuTurmas();
                break;

            default:
            console.log("Opção inválida! Tente novamente.");
            break;
        }
    } while(opcao !== "0");
}

async function menuAlunos() {
    await criarTabela();

    const opcoes = [
        "1 - Criar Aluno",
        "2 - Editar Aluno",
        "3 - Deletar Aluno",
        "4 - Deletar Todos os Alunos",
        "5 - Listar Todos os Alunos",
        "6 - Listar Aluno por E-mail",
        "7 - Total de Alunos",
        "0 - Sair"
    ];

    let opcao;
    do{
        console.clear();
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
               await AlunoView.criar();
                break;
            case "2":
               await AlunoView.editar();
                break;
            case "3":
               await AlunoView.deletarAluno();
                break;
            case "4":
               await AlunoView.deletarTodos();
                break;
            case "5":
               await AlunoView.listarTodos();
                break;
            case "6":
               await AlunoView.listarPorEmail();
                break;
            case "7":
               await AlunoView.totalAlunos();
                break;

            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while(opcao !== "0");

}

async function menuProfessores() {
    await criarTabela();

    const opcoes = [
        "1 - Criar Professor",
        "2 - Editar Professor",
        "3 - Listar Todos os Professores",
        "4 - Listar Professor por Matrícula",
        "5 - Deletar todos os Professores",
        "6 - Deletar Professor",
        "7 - Total de Professores",
        "0 - Sair"
    ];

    let opcao;
    do{
        console.clear();
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");
        
        switch (opcao) {
            case "1":
               await ProfessorView.criar();
                break;
            case "2":
               await ProfessorView.editar();
                break;
            case "3":
               await ProfessorView.listarTodos();
                break;
            case "4":
               await ProfessorView.listarPorMatricula();
                break;
            case "5":
               await ProfessorView.deletarTodos();
                break;
            case "6":
               await ProfessorView.deletarProfessor();
            case "7":
               await ProfessorView.totalProfessores();
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while(opcao !== "0");
}

async function menuTurmas() {
    await criarTabela();

    const opcoes = [
        "1 - Criar Turma",
        "2 - Editar Turma",
        "3 - Listar Todas as Turmas",
        "4 - Listar Turma por Código",
        "5 - Deletar Todas as Turmas",
        "6 - Deletar Turma",
        "7 - Total de Turmas",
        "8 - Listar Alunos por Curso",
        "9 - total de Alunos por Curso",
        "10 - Listar Professores por Curso"
    ];

    let opcao;
    do {
        console.clear();
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "1":
                await TurmaView.criar();
                break;
            case "2":
                await TurmaView.editar();
            case "3":
                await TurmaView.listarTodas();
                break;
            case "4":
                await TurmaView.listarPorCodigo();
                break;
            case "5":
                await TurmaView.deletarTodas();
            case "6":
                await TurmaView.deletarTurma();
                break;
            case "7":
                await TurmaView.totalTurmas();
                break;
            case "8":
                await TurmaView.listarAlunosPorTurma();
                break;
            case "9":
                await TurmaView.totalAlunosPorTurma();
                break;
            case "10":
                await TurmaView.listarProfessoresPorTurma();
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
                break;
        }
    } while (opcao !== "0");
}

menu();

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