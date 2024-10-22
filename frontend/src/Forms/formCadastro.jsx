import React from 'react';
import './cadastro.css';

const Cadastro = ({ voltar }) => {
  return (
    <div className="cadastro">
      <h2>Insira os Dados</h2>
      <form className="form-grid">
        <div className="form-group">
          Nome:
          <input type="text" placeholder='ex: João Silva Ramos' name="nome" />
        </div>

        <div className="form-group">
          CPF:
          <input type="text" placeholder='ex: 012.885.986-65' name="cpf" />
        </div>

        <div className="form-group">
          Logradouro:
          <input type="text" placeholder='ex: Rua São João' name="logradouro" />
        </div>

        <div className="form-group">
          Bairro:
          <input type="text" placeholder='ex: Inocoop' name="bairro" />
        </div>

        <div className="form-group">
          Cidade:
          <input type="text" placeholder='ex:Pojuca-BA' name="cidade" />
        </div>

        <div className="form-group">
          Valor:
          <input type="text" placeholder='ex: R$90,00' name="valor" />
        </div>

        <div className="form-group">
          Data de Compra:
          <input type="date" name="dataCompra" />
        </div>

        <div className="form-group">
          Data de Vencimento:
          <input type="date" name="dataVencimento" />
        </div>

        <button className='btn' type="submit">Cadastrar</button>
        <button className='btn' onClick={voltar}>Voltar</button>
      </form>
    </div>
  );
};

export default Cadastro;

