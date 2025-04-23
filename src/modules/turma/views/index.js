import TurmaController from "../controllers/index.js";
import PromptSync from "prompt-sync";

const input = PromptSync;

class TurmaView{
    static async criar(){
        const cod_turma = input("Digite o código da turma: ");
        const nome = input("Digite o nome da turma: ");
        const turma = await TurmaController.criar(cod_turma, nome);
        console.table(turma);
    }

    static async editar(){
        const nome = input("Digite o novo nome da turma: ");
        const turma = await TurmaController.editar(nome)
    }
}