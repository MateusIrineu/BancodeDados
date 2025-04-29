import TurmaController from "../controllers/index.js";
import PromptSync from "prompt-sync";
import TurmaModel from "../models/index.js";

const input = PromptSync();

class TurmaView{
    static async criar(){
        const cod_turma = input("Digite o código da turma: ");
        const nome = input("Digite o nome da turma: ");
        const turma = await TurmaController.criar(cod_turma, nome);
        console.table(turma);
    }

    static async editar(){
        const nome = input("Digite o novo nome da turma: ");
        const turma = await TurmaController.editar(nome);
        console.table(turma);
    }

    static async listarTodas(){
        const turma = await TurmaController.listarTodas();
        console.table(turma);
    }

    static async listarPorCodigo(){
        const cod_turma = input("Digite o código da turma: ");
        const turma = await TurmaController.listarPorCodigo(cod_turma);
        console.table(turma);
    }

    static async deletarTodas(){
        await TurmaController.deletarTodas();
    }

    static async deletarTurma(){
        const cod_turma = input("Digite o código da turma: ");
        const turma = await TurmaController.deletarTurma(cod_turma);
        console.table(turma)
    }

    static async totalTurmas(){
        const total = await TurmaController.totalTurmas();
        console.table(total);
    }

    static async listarAlunosPorTurma() {
        const turma = input(`Informe o Codigo da  Turma: `)
        const alunos = await TurmaController.listarAlunosPorTurma(turma);
        console.table(alunos);
      }
    
      static async totalAlunosPorTurma() {
        const alunos = await TurmaController.totalAlunosPorTurma();
        console.table(alunos);
      }
    
      static async listarProfessoresPorTurma() {
        const turma = input(`Informe o Codigo da Turma: `)
        const professores = await TurmaController.listarProfessoresPorTurma(turma);
        console.table(professores);
      }
}

export default TurmaView;