import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function CadastroCategoria(){

    const [nomecategoria, setNomeCategoria] = useState('Filmes');
    const [categorias, setCategorias] = useState(['TESTE']);


    function handleCategoria(event){
        setNomeCategoria(event.target.value);
    }

    function handleSubmitForm(event){
        event.preventDefault();
        setCategorias([...categorias, nomecategoria]);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria - {nomecategoria}</h1>

            <form onSubmit={handleSubmitForm}>
                <label htmlFor="">
                    <input type="text" onChange={handleCategoria} value={nomecategoria} />
                </label>

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={categoria}>
                            {categoria}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        
        </PageDefault>
    )

}

export default CadastroCategoria;