import React, { useState, useEffect } from 'react';
import './style.css'; // Importe o arquivo de estilo corretamente

export default function Todo() {
  const [descricao, setDescricao] = useState("");
  const [options, setOptions] = useState([]);
  const [marcaDaCamisa, setMarcaDaCamisa] = useState("");
  const [id, setId] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("Lista")) || [];
    const lastId = storedData.length > 0 ? storedData[storedData.length - 1].id : 0;
    return lastId + 1;
  });

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(options));
  }, [options]);

  const salvar = (e) => {
    e.preventDefault();

    if (descricao.trim() === "" || marcaDaCamisa.trim() === "") {
      return;
    }

    const newOption = {
      descricao: descricao,
      id: id,
      marcaDaCamisa: marcaDaCamisa,
    };

    setOptions([...options, newOption]);
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
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          />
          <input
            value={marcaDaCamisa}
            onChange={(e) => setMarcaDaCamisa(e.target.value)}
            placeholder="Marca da camisa"
          />
          <button className="btn" type="submit">Adicionar</button>
        </form>
      </div>

      {options.map((option) => (
        <ul key={option.id}>
          <li>
            <p>{option.descricao}</p>
            <p>{option.marcaDaCamisa}</p>
            <button onClick={() => remover(option.id)}>Remover</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
