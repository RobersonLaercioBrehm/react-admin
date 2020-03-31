import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiBell, FiPlus, FiMenu, FiSettings, FiFeather } from 'react-icons/fi';


import './header.css';

export default function Header() {

	function toggle(value, target) {
		if (typeof (target) == 'string') {
			let dom = document.querySelector(target);
			dom.classList.toggle(value);
		}else if(typeof (target) == 'object'){
			target.target.classList.toggle(value);
		}
	}

	return (
		<header>
			<div className='header'>
				<ul>
					<li>
						<Link to='/'>
							<FiFeather />
							<span>Admin</span>
						</Link>
					</li>
				</ul>
				<ul>
					<li className='nav'>
						<button onClick={event => toggle('active', '#app')}>
							<FiMenu />
						</button>
					</li>
					<li className='nav'>
						<button js-ui-toggle='ui-collapse' js-ui-target='#app'>
							<FiSettings />
						</button>
					</li>
				</ul>
			</div>
			<div className='collapse'>
				<ul>
					<li>
						<button js-ui-toggle='ui-nav-icon' js-ui-target='#app'>
							<FiMenu />
						</button>
					</li>
					<li className='sub'>
						<button onClick={event => toggle('active', event)}>
							<FiPlus />
							Novo
						</button>
						<ul>
							<li><Link to='./login'><i className='mdi mdi-cog'></i>Configuração</Link></li>
							<li><Link to='./login'><i className='mdi mdi-image'></i>Perfil</Link></li>
							<li className='line'></li>
							<li><Link to='./login'><i className='mdi mdi-door'></i>Sair</Link></li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>
						<span>
							<FiCalendar />
							Sexta-Feira, 12 Março de 2020
						</span>
					</li>
					<li className='sub'>
						<button onClick={event => toggle('active', event)}>
							<FiBell />
						</button>
						<ul>
							<li className='header'>Você tem 2 notificações</li>
							<li>
								<Link to='./login'>
								</Link>
							</li>
							<li className='line'></li>
							<li><Link to='./login'>Configuração<br /><small>10 minutos atrás</small></Link></li>
							<li className='line'></li>
							<li><Link to='./login'><i className='mdi mdi-image'></i>Perfil</Link></li>
							<li className='line'></li>
							<li className='footer'><Link to=''>Ver todas as notificações</Link></li>
						</ul>
					</li>
					<li className='sub'>
						<button onClick={event => toggle('active', event)}>
							Nome
						</button>
						<ul>
							<li><Link to='./login'><i className='mdi mdi-cog'></i>Configuração</Link></li>
							<li><Link to='./login'><i className='mdi mdi-image'></i>Perfil</Link></li>
							<li className='line'></li>
							<li><Link to='./login'><i className='mdi mdi-logout'></i>Sair</Link></li>
						</ul>
					</li>
				</ul>
			</div>
		</header>
	);
} 