import {read, create , update, deleteDiv} from '../Model/Pessoas.mjs';


// INSERT (CREATE)
export async function createDividass(req, res){
    const {nome, cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento} = req.body;
    console.log('Dados recebidos do frontend:', {nome,cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento});

    create (nome,cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento, (err, result) => {
        if (err){
            res.status(500).json({error: err.message});
            return;
        }
        res.status(201).json({menssagem: 'Dados enviado com sucesso'});
    });
}

// CONSULTA (READ)
export async function getAllDividas(req, res){
    read((err, dividas) => {
        if(err){
            res.status(500).json({error: err.message});
            return;
        }
        res.json(dividas);
    });
}

// ATUALIZANDO (UPDATE)
export async function updateDividas(req, res){
    const {id} = req. params;
    console.log('Dados recebidos do frontend', {id});
    const {nome, cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento} = req.body;
    update(id, nome, cpf, logradouro, bairro, cidade, valor, dataCompra, dataVencimento ,(err, result) => {
        if(err){
            res.status(500).json({error: err.message});
            return;
        }
        res.send('Dados atualizado com sucesso');
    });
}

// DELETE (UPDATE/INATIVANDO)
export async function deleteDividas(req, res){
    const {id} = req.params;
    console.log('delete recebido do frontend: ', {id});
    deleteDiv(id, (err, result) => {
        if(err){
            res.status(500).json({error: err.message});
            return;
        }
        res.send('Dados excluidos com sucesso');
    });
}