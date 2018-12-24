import React from 'react';

export default class Header extends React.Component {
	toggleNav = () => {
		const nav = document.querySelector('.header__nav-container');
		nav.classList.toggle('header__nav-container--toggle-show');
	};

	render() {
		return (
			<div>
				<div className="container">
					<div className="header">
						<div className="header__logo-container">
							<img
								className="header__logo-container__logo"
								src={'images/DiludedLogo.png'}
							/>
						</div>
						<div className="header__nav-toggle" onClick={this.toggleNav}>
							<i className="fa fa-bars" />
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
	}
}
