import AlunoController from "../controllers/index.js";

class AlunoView{
    static async criar(nome, email, matricula, telefone, cod_turma){
        const aluno = await AlunoController.criar(nome, email, matricula, telefone, cod_turma);
        console.table(aluno);
    }

    static async editar(nome, email, matricula, telefone, cod_turma){
        const aluno = await AlunoController.editar(nome, email, matricula, telefone, cod_turma);
        console.table(aluno);
    }

    static async listarTodos(){
        const aluno = await AlunoController.listarTodos();
        console.table(aluno);
    }

    static async listarPorEmail(email){
        const aluno = await AlunoController.listarPorEmail(email);
        console.table(aluno);
    }

    static async deletarTodos(){
        await AlunoController.deletarTodos();
    }

    static async deletarAluno(email){
        const aluno = await AlunoController.deletarAluno(email);
        console.table(aluno);
    }

    static async totalAlunos(){
        const total = await AlunoController.totalAlunos();
        console.table(total);
    }
}

export default AlunoView;