import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
	return fetch(`${URL_CATEGORIES}`).then((response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Não foi possível pegar os dados :(');
	}).then((responseJSON) => {
		return responseJSON;
	});
}

function getAllWithVideos() {
	return fetch(`${URL_CATEGORIES}?_embed=videos`).then((response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Não foi possível pegar os dados :(');
	}).then((responseJSON) => {
		return responseJSON;
	});
}

function create(data) {
	return fetch(`${URL_CATEGORIES}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	})
	.then(async (response) => {
		if (response.ok) {
			return response.json();
		}

		throw new Error('Não foi possível cadastrar os dados :(');
	}).then((responseJSON) => {
		return responseJSON;
	});
}

export default {
	getAllWithVideos,
	getAll,
	create
};