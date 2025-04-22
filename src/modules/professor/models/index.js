import client from "../../../config/database";

class ProfessorModel{
    static async criar(nome, matricula, cod_turma){
        const dados = [nome, matricula, cod_turma]
        const consulta = `insert into professor(nome, matricula, cod_turma)
        values ($1, $2, $3) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async listarTodos(){
        const consulta = `select * from professor;`
        const resultado = await client.query(consulta);
        return resultado.rows;
    }

    static async listarPorMatricula(matricula){
        const dados = [matricula]
        const consulta = `select * from professor where matricula = $1;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async atualizarProfessor(nome, matricula, cod_turma){
        const dados = [nome, matricula, cod_turma]
        const consulta = `update professor set nome = $1, cod_turma = $3
        where matricula = $2 returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async deletarProfessor(matricula){
        const dados = [matricula]
        const consulta = `delete from professor where matricula = $1;`
        await client.query(consulta, dados);
    }

    static async deletarTodos(){
        const consulta = `delete from professor;`
        await client.query(consulta);
    }
   
    static async totalProfessores(){
        const consulta = `select count(matricula) as total from professor;`
        const resultado = await client.query(consulta);
        return resultado.rows
    }
}

export default ProfessorModel;