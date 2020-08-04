import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import styled, { css } from 'styled-components';

const Main = styled.main`
    background: #F3F3F3;
    padding: 100px 40px 40px 40px;
`;

function CadastroVideo() {
	const history = useHistory();
	const [categorias, setCategorias] = useState([]);
	const categoryTitles = categorias.map(({ titulo }) => titulo);
	const { handleChange, values } = useForm({
		titulo: 'Video padrão',
		url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
		categoria: 'Front End',
	});

	useEffect(() => {
		categoriasRepository.getAll().then((response) => {
			setCategorias(response);
		});
	}, []);

	return (
		<div>

			<Menu />

			<Main>
				<h1>Cadastro de Video</h1>

				<form onSubmit={(event) => {
					event.preventDefault();
					// alert('Video Cadastrado com sucesso!!!1!');

					const categoriaEscolhida = categorias.find((categoria) => {
						return categoria.titulo === values.categoria;
					});

					videosRepository.create({
						titulo: values.titulo,
						url: values.url,
						categoriaId: categoriaEscolhida.id,
					}).then(() => {
						console.log('Cadastrou com sucesso!');
						history.push('/');
					});
				}}
				>
					<FormField
						label="Título do Vídeo"
						name="titulo"
						value={values.titulo}
						onChange={handleChange}
					/>

					<FormField
						label="URL"
						name="url"
						value={values.url}
						onChange={handleChange}
					/>

					<FormField
						label="Categoria"
						name="categoria"
						value={values.categoria}
						onChange={handleChange}
						suggestions={categoryTitles}
					/>

					<Button type="submit">
						Cadastrar
					</Button>
				</form>

				<br />
				<br />

				<Link to="/cadastro/categoria">
					Cadastrar Categoria
				</Link>
			</Main>

			<Footer background="#F3F3F3" color="#000"/>

		</div>
	);
}

export default CadastroVideo;