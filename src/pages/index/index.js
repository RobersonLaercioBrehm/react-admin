import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle, FiHome } from 'react-icons/fi';

import './style.css';

import Layout from '../../layout'

export default function Index() {

	return (
		<Layout>
			<div className='main-header'>
				<div>
					<FiArrowRightCircle />
				</div>
				<div>
					<h1>Home <small> - tetetete</small></h1>
					<span>Lorem ipsum dolor sit amet</span>
				</div>
				<div>
				</div>
			</div>
			<div className='main-breadcrumb'>
				<ul>
					<li><Link to='#'><FiHome/></Link></li>
					<li><Link to='#'>Produto</Link></li>
					<li><Link to='#'>Detalhe</Link></li>
				</ul>
			</div>
			<div class='wrap'>
				adas
			</div>
		</Layout>
	);
} 