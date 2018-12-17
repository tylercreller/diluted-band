import React from 'react';
import './Header.scss';

const Header = () => (
	<div>
		<div className="container">
			<div className="header">
				<div>
					<img className="header__logo" src={'images/DiludedLogo.png'} />
				</div>
				<div className="header__nav-container">
					<a href="https://dilutedband.bandcamp.com/merch/">MERCH</a>
					<a href="#shows">SHOWS</a>
					<a href="#social">SOCIAL</a>
					<a href="mailto:dilutedband1@gmail.com" target="_blank">
						CONTACT
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Header;
