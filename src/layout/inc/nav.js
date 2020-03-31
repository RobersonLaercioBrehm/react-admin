import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiUsers, FiUser, FiBox, FiCalendar, FiClipboard, FiCoffee, FiGrid } from 'react-icons/fi';

import './nav.css';

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<span>Categoria</span>
				</li>
				<li>
					<NavLink to='/clientes'>
						<FiUsers />
						<span>Clientes</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/profissionais'>
						<FiCoffee />
						<span>Profissionais</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/servicos'>
						<FiBox />
						<span>Serviços</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/agenda'>
						<FiCalendar />
						<span>Agenda</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/comanda'>
						<FiClipboard />
						<span>Comanda</span>
					</NavLink>
				</li>
				<li className='line'></li>
				<li>
					<NavLink to='/admins'>
						<FiUser/>
						<span>Administradores</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/estabelecimentos'>
						<FiGrid/>
						<span>Estabelecimentos</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
} 