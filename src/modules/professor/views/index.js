import ProfessorController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync();

class ProfessorView{
    static async criar(){
        const nome = input("Digite o nome do professor: ");
        const matricula = input("Digite a matrícula do professor: ");
        const cod_turma = input("Digite o código da turma: ");
        const professor = await ProfessorController.criar(nome, matricula, cod_turma);
        console.table(professor);
    }

    static async editar(){
        const nome = input("Digite o novo nome do professor: ");
        const matricula = input("Digite a nova matrícula do professor: ");
        const cod_turma = input("Digite o novo código da turma: ");
        const professor = await ProfessorController.editar(nome, matricula, cod_turma);
        console.table(professor);
    }

    static async listarTodos(){
        const professor = await ProfessorController.listarTodos();
        console.table(professor);
    }

    static async listarPorMatricula(){
        const matricula = input("Digite a nova matrícula do professor: ");
        const professor = await ProfessorController.listarPorMatricula(matricula);
        console.table(professor);
    }

    static async deletarTodos(){
        await ProfessorController.deletarTodos();
    }

    static async deletarProfessor(){
        const matricula = input("Digite a nova matrícula do professor: ");
        const professor = await ProfessorController.deletarProfessor(matricula);
        console.table(professor);
    }

    static async totalProfessores(){
        const total = await ProfessorController.totalProfessores();
        console.log(total);
    }
}

export default ProfessorView;