import React from 'react';

import './index.css';

import Header from './inc/header';
import Nav from './inc/nav';
import Main from './inc/main';
import Footer from './inc/footer';
import Aside from './inc/aside';

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