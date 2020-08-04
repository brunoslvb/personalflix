import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
// import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import config from '../../../config';
import categoriasRepository from '../../../repositories/categorias';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
    background: #F3F3F3;
    padding: 100px 40px 40px 40px;
`;

const Table = styled.table`
    margin: auto;
    margin-top: 20px;
    width: 50%;
    text-align: left;
    /* border: 1px solid #000; */
    border-collapse: collapse;
`;

const Tr = styled.tr`
    /* border: 1px solid #000; */
`;

const Th = styled.th`
    height: 50px;
    border-bottom: 1px solid #DDD;
    padding: 10px;
`;

const Td = styled.td`
    border-bottom: 1px solid #DDD;
    height: 50px;
    padding: 10px;
`;

const ColorBox = styled.div`
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 30px;
    background-color: ${(props) => props.background};
`;

const Button = styled.button`
    font-family: Roboto, sans-serif;
    padding: 16px 24px;
    background-color: ${({ background }) => background};
    color: ${({ color }) => color};
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 12pt;
    cursor: pointer;
    /* font-weight: bold; */
    transition: opacity .3s;
    margin-right: 10px;
    
    &:hover, &:focus {
        opacity: .5;
        border: none;
    }
`;

function CadastroCategoria(){

    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: ''
    }

    const { values, handleChange, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);

    const URL = `${config.URL}/categorias`;

    function handleSubmitForm(event){
        event.preventDefault();

        setCategorias([...categorias, values]);

        categoriasRepository.create(values).then(() => {
            console.log('Cadastrada');
        }).catch((err) => {
            console.log(err);
        });

        clearForm();
    }


    useEffect(() => {

        fetch(URL).then((response) => {
            return response.json();
        }).then((responseJSON) => {
            setCategorias([
                ...responseJSON,
            ]);
        });
    }, []);

    return (
        <>
            <Menu />
            
            <Main>
                <h1>Cadastro de Categoria</h1>

                <form onSubmit={handleSubmitForm}>

                    <FormField label="Nome da Categoria" type="text" name="titulo" value={values.titulo} onChange={handleChange}/>

                    <FormField label="Descrição da Categoria" type="textarea" name="descricao" value={values.descricao} onChange={handleChange}/>

                    <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange}/>

                    <Button background="#000" color="#FFF">Cadastrar</Button>
                    
                </form>

                {categorias.length === 0 && (
                    <div>
                        Loading...
                    </div>
                )}

                <Table>
                    <thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Descrição</Th>
                            <Th>Cor</Th>
                            <Th>Editar</Th>
                            <Th>Excluir</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) => {
                            return (
                                <Tr key={categoria.id}>
                                    <Td>
                                        {categoria.titulo}
                                    </Td>
                                    <Td>
                                        {categoria.descricao}
                                    </Td>
                                    <Td>
                                        <ColorBox background={categoria.cor}/>
                                    </Td>
                                    <Td>
                                        <FiEdit2 />
                                    </Td>
                                    <Td>
                                        <FiTrash2 />
                                    </Td>
                                </Tr>
                            );
                        })}
                    </tbody>
                </Table>

                <Link to="/">
                    <Button style={{ float: 'right' }} background="#000" color="#FFF">Home</Button>
                </Link>
            

            </Main>

            <Footer background="#F3F3F3" color="#000"/>
        </>
    )

}

export default CadastroCategoria;