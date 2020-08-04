import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
	const [dadosIniciais, setDadosIniciais] = useState([]);

	useEffect(() => {
		// http://localhost:8080/categorias?_embed=videos
		categoriasRepository.getAllWithVideos()
			.then((response) => {
				console.log(response[0].videos[0]);
				setDadosIniciais(response);
			})	
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<PageDefault paddingAll={0}>
			{dadosIniciais.length === 0 && (<div>Loading...</div>)}

			{dadosIniciais.map((categoria, indice) => {
				console.log(categoria);
				if (indice === 0) {
					return (
						<div key={categoria.id}>
							<BannerMain
								videoTitle={dadosIniciais[0].videos[0].titulo}
								url={dadosIniciais[0].videos[0].url}
								videoDescription={dadosIniciais[0].videos[0].description}
							/>
							<Carousel
								ignoreFirstVideo
								category={dadosIniciais[0]}
							/>
						</div>
					);
				}

				return (
					<Carousel
						key={categoria.id}
						category={categoria}
					/>
				);
			})}

		</PageDefault>
	);
}

export default Home;