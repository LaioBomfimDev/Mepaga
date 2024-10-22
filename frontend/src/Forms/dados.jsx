import React from 'react';
import './cadastro.css';

const Dados = ({ voltar }) => {
  return (
    <div className="cadastro">
      <h2>Dados Cadastrados</h2>
      <br />

      <button className='btn' onClick={voltar}>Voltar</button>
    </div>
    
  );
};

export default Dados;