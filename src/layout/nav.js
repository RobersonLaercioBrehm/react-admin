import React from 'react';

import { Link } from 'react-router-dom';

import './nav.css';

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<span>Categoria</span>
				</li>
				<li>
					<Link to="/">
						<i class='mdi mdi-format-list-text'></i>
						<span>Home</span>
					</Link>
				</li>
				<li>
					<Link to="/clientes">
						<i class='mdi mdi-home'></i>
						<span>Clientes</span>
					</Link>
				</li>
				<li>
					<a href='./admin' class='active'>
						<i class='mdi mdi-cogs'></i>
						<span>Icone</span>
					</a>
				</li>
				<li class='line'></li>
				<li>
					<a href='./admin'>
						<b>9</b>
						<i class='mdi mdi-pencil'></i>
						<span>Icone e marcador</span>
					</a>
				</li>
				<li class='sub'>
					<a href='./admin'>
						<i class='mdi mdi-check'></i>
						<span>Submenu</span>
					</a>
					<ul>
						<li>
							<a href='./admin'>
								<span>Icone</span>
							</a>
						</li>
						<li>
							<a href='./admin'>
								<b>9</b>
								<span>Icone</span>
							</a>
						</li>
						<li>
							<a href='./admin'>
								<span>Icone</span>
							</a>
						</li>
					</ul>
				</li>
				<li class='sub'>
					<a href='./admin' class='active'>
						<b>9</b>
						<i class='mdi mdi-mail'></i>
						<span>Submenu</span>
					</a>
					<ul>
						<li>
							<a href='./admin'>
								<span>Icone</span>
							</a>
						</li>
						<li>
							<a href='./admin' class='active'>
								<b>9</b>
								<span>Icone</span>
							</a>
						</li>
						<li>
							<a href='./admin'>
								<span>Icone</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
} 