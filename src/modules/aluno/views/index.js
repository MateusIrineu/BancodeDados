import AlunoController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync();

class AlunoView{
    static async criar(){
        const nome = input("Digite o nome do aluno: ");
        const email = input("Digite o e-mail do aluno: ");
        const matricula = input("Digite a matrícula do aluno: ");
        const telefone = input("Digite o telefone do aluno: ");
        const cod_turma = input("Digite o código da turma: ");
        const aluno = await AlunoController.criar(nome, email, matricula, telefone, cod_turma)
        console.table(aluno);
    }

    static async editar(){
        const nome = input("Digite o novo nome do aluno: ");
        const email = input("Digite o novo e-mail do aluno: ");
        const matricula = input("Digite a nova matrícula do aluno: ");
        const telefone = input("Digite o novo telefone do aluno: ");
        const cod_turma = input("Digite o novo código da turma: ");
        const aluno = await AlunoController.editar(nome, email, matricula, telefone, cod_turma);
        console.table(aluno);
    }

    static async listarTodos(){
        const aluno = await AlunoController.listarTodos();
        console.table(aluno);
    }

    static async listarPorEmail(){
        const email = input("Digite o e-mail do aluno: ");
        const aluno = await AlunoController.listarPorEmail(email);
        console.table(aluno);
    }

    static async deletarTodos(){
        await AlunoController.deletarTodos();
    }

    static async deletarAluno(){
        const email = input("Digite o e-mail do aluno: ");
        const aluno = await AlunoController.deletarAluno(email);
        console.table(aluno);
    }

    static async totalAlunos(){
        const total = await AlunoController.totalAlunos();
        console.table(total);
    }
}

export default AlunoView;