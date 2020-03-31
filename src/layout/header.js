import React from 'react';

import './header.css';

export default function Header() {
	return (
		<header>
			<div class='header'>
				<ul>
					<li>
						<a href='./admin'>
							<i class='lnr lnr-rocket'></i>
							<span>Admin</span>
						</a>
					</li>
				</ul>
				<ul>
					<li class='nav'>
						<button js-ui-toggle='ui-nav' js-ui-target='#app'>
							<i class='lnr lnr-menu'></i>
						</button>
					</li>
					<li class='nav'>
						<button js-ui-toggle='ui-collapse' js-ui-target='#app'>
							<i class='lnr lnr-cog'></i>
						</button>
					</li>
				</ul>
			</div>
			<div class='collapse'>
				<ul>
					<li>
						<button js-ui-toggle='ui-nav-icon' js-ui-target='#app'>
							<i class='mdi mdi-format-indent-decrease'></i>
						</button>
					</li>
					<li class='sub'>
						<a href='#'>
							<i class='mdi mdi-plus-thick'></i>
							Novo
						</a>
						<ul>
							<li><a href='./login'><i class='mdi mdi-cog'></i>Configuração</a></li>
							<li><a href='./login'><i class='mdi mdi-image'></i>Perfil</a></li>
							<li class='line'></li>
							<li><a href='./login'><i class='mdi mdi-door'></i>Sair</a></li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>
						<span>
							<i class='mdi mdi-calendar-outline'></i>
							Sexta-Feira, 12 Março de 2020
						</span>
					</li>
					<li class='sub'>
						<a href='#'>
							<i class='mdi mdi-bell-outline'></i>
						</a>
						<ul>
							<li class='header'>Você tem 2 notificações</li>
							<li>
								<a href='./login'>
								</a>
							</li>
							<li class='line'></li>
							<li><a href='./login'>Configuração<br /><small>10 minutos atrás</small></a></li>
							<li class='line'></li>
							<li><a href='./login'><i class='mdi mdi-image'></i>Perfil</a></li>
							<li class='line'></li>
							<li class='footer'><a href=''>Ver todas as notificações</a></li>
						</ul>
					</li>
					<li class='sub'>
						<a href=''>
							<span>
								Nome
								<small>Nome</small>
							</span>
						</a>
						<ul>
							<li><a href='./login'><i class='mdi mdi-cog'></i>Configuração</a></li>
							<li><a href='./login'><i class='mdi mdi-image'></i>Perfil</a></li>
							<li class='line'></li>
							<li><a href='./login'><i class='mdi mdi-logout'></i>Sair</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</header>
	);
} 