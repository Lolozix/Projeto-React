import React, { useState } from 'react';

export default function Todo() {
  const [descricao, setDescricao] = useState("");
  const [options, setOptions] = useState([]);
  const [marcaDaCamisa, setMarcaDaCamisa] = useState("");
  const [id, setId] = useState(1);

  const salvar = (e) => {
    e.preventDefault();

    if (descricao.trim() === "" || marcaDaCamisa.trim() === "") {
      return;
    }

    setOptions([...options, {
      descricao: descricao,
      id: id,
      marcaDaCamisa: marcaDaCamisa 
    }]);
    setId(id + 1);
    setDescricao("");
    setMarcaDaCamisa(""); 
  };

  const remover = (id) => {
    const updatedOptions = options.filter((item) => item.id !== id);
    setOptions(updatedOptions);
  }

  return (
    <div>
      <h1 className="d">Opções de Camisas</h1> 
      
      <div className="add">
        <form onSubmit={salvar}>
          <input
            value={descricao}
            onChange={(e) => { setDescricao(e.target.value) }}
            placeholder="Descrição"
          />
          <input
            value={marcaDaCamisa}
            onChange={(e) => { setMarcaDaCamisa(e.target.value) }}
            placeholder="Marca da camisa"
          />
          <button className="btn" type="submit">Adicionar</button>
        </form>
      </div>

      {options.map((option) =>
        <ul key={option.id}>
          <li>
            <p>{option.descricao}</p>
            <p>{option.marcaDaCamisa}</p> 
            <button onClick={() => remover(option.id)}>Remover</button>
          </li>
        </ul>
      )}

    </div>
  );
}
