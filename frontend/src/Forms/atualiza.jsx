import React from 'react';
import './cadastro.css';

const Atualiza = ({ voltar }) => {
  return (
    <div className="cadastro">
      <h2>Atualizar/ Deletar dados cadastrados</h2>
      <br />

      <button className='btn' onClick={voltar}>Voltar</button>
    </div>
    
  );
};

export default Atualiza;