import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria(){
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function handleSubmitForm(event){
        event.preventDefault();
        setCategorias([...categorias, values]);

        setValues(valoresIniciais);
    }

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(event){
        const { name, value } = event.target;

        setValue(name, value);
    }

    useEffect(() => {
        console.log('teste - useEffect');

        const URL = 'http://localhost:8080/categorias';

        fetch(URL).then((response) => {
            return response.json();
        }).then((responseJSON) => {
            setCategorias([
                ...responseJSON,
            ]);
        });

        setTimeout(() => {
            console.log('lala');
        }, 3000);

    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria - {values.nome}</h1>

            <form onSubmit={handleSubmitForm}>

                <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange}/>

                <FormField label="Descrição da Categoria" type="textarea" name="descricao" value={values.descricao} onChange={handleChange}/>

                <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange}/>

                <Button>Cadastrar</Button>

                
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={categoria.nome}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                <button>Ir para home</button>
            </Link>
        
        </PageDefault>
    )

}

export default CadastroCategoria;