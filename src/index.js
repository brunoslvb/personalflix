import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

import './index.css';



ReactDOM.render(
	// <React.StrictMode>
	// 	<Home />
	// </React.StrictMode>,
	
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact />
			<Route path="/cadastro/video" component={CadastroVideo} />
			<Route path="/cadastro/categoria" component={CadastroCategoria} />
			<Route component={Home} />
		</Switch>

		{/* <App /> */}
	</BrowserRouter>,
	document.getElementById('root')
);
