import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  //
  //
  //
  // DEFINICAO DO OBJETO
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  //
  //
  //
  // FUNCAO PARA APPEND DOS VALORES
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  //
  //
  //
  // FUNCAO GENERICA PARA SET DOS VALORES
  function handleChange(infoEvento) {
    setValue(infoEvento.target.getAttribute('name'), infoEvento.target.value);
  }

  return (
    <>
      <PageDefault>
        <h1>Cadastrar Categoria: {values.nome}</h1>

        <form
          onSubmit={function handleSubmit(infoEvento) {
            infoEvento.preventDefault();
            setCategorias([...categorias, values]); //... -> FUNCIONA COMO UM APPEND
            setValues(valoresIniciais); // LIMPA OS CAMPOS
          }}
        >
          <FormField
            type="text"
            value={values.nome}
            name="nome"
            onChange={handleChange}
            label="Nome da Categoria: "
          />

          <FormField
            type="textarea"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
            label="Descrição: "
          />

          <FormField
            type="color"
            value={values.cor}
            name="cor"
            onChange={handleChange}
            label="Cor: "
          />

          <button>Cadastrar</button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
          })}
        </ul>

        <Link to="/">Ir para home</Link>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
