import React from 'react';

import './index.css';

import Header from './header';
import Nav from './nav';
import Main from './main';
import Footer from './footer';
import Aside from './aside';

export default function Layout({children}) {
	return (
		<div id='app'>
			<Header />
			<Nav />
			<Main>{children}</Main>
			<Footer />
			<Aside />
		</div>
	);
} 