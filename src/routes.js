import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/index';
import Clientes from './pages/clientes';

export default function Routes(){
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Index} />
				<Route path="/clientes" exact component={Clientes} />
			</Switch>
		</BrowserRouter>
	);
}