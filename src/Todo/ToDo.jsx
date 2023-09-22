import React, { useState } from "react";
import './Todo.css';
import Todo from "./ToDo.jsx";

export default function Todo() {
    const [descricao, setDescricao] = useState(""); 
    const [options, setOptions] = useState([]);
    const [id, setId] = useState(1);
    const [nomeDoTenis, setNomeDoTenis] = useState(""); 

    const salvar = (e) => {
        e.preventDefault();

        // Adicione validação para campos em branco
        if (descricao.trim() === "" || nomeDoTenis.trim() === "") {
            return;
        }

        setOptions([...options, {
            descricao: descricao,
            id: id,
            nomeDoTenis: nomeDoTenis
        }]);
        setId(id + 1);
        setDescricao("");
        setNomeDoTenis(""); 
    };

    const remover = (id) => {
        const updatedOptions = options.filter((item) => item.id !== id);
        setOptions(updatedOptions);
    }

    return (
        <div>
            <h1 className="d">Opções de Tênis</h1>

            <div className="add">
                <form onSubmit={salvar}>
                    <input
                        value={descricao}
                        onChange={(e) => { setDescricao(e.target.value) }}
                        placeholder="Descrição"
                    />
                    <input
                        value={nomeDoTenis}
                        onChange={(e) => { setNomeDoTenis(e.target.value) }}
                        placeholder="Nome do Tênis"
                    />
                    <button className="btn" type="submit">Adicionar</button>
                </form>
            </div>

            {options.map((option) =>
                <ul key={option.id}>
                    <li>
                        <p>{option.descricao}</p>
                        <p>{option.nomeDoTenis}</p>
                        <button onClick={() => remover(option.id)}>Remover</button>
                    </li>
                </ul>
            )}

        </div>
    );
}
