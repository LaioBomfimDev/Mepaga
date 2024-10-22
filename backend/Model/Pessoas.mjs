import connection from "../Config/Conexao.js"


export function read(callback){
    connection.query('SELECT * from cadastro where ativo_dividas = 1', callback);
}

export function create(nome, cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento, callback){
    connection.query('INSERT INTO cadastro (nome, cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nome, cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento ], callback);
}

export function update( nome, cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento, id, callback){
        connection.query("UPDATE cadastro SET nome = ?, cpf = ?, logradouro = ?, bairro = ?, cidade = ?, valor = ?, dataCompra = ?, dataVencimento = ?, ativo_dividas = 1 WHERE idCadastro = ?",[nome, cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento, id], callback);
    }

export function  deleteDiv(id, callback){
        connection.query('DELETE from cadastro where idCadastro = ?', [id], callback);
    }


