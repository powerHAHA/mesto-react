import React from 'react';
import logo from '../images/logo.svg';

export const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="Логотип" className="logo" />
		</header>
	)
}