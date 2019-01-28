import React from 'react';

export default class Header extends React.Component {
	toggleNav = () => {
		const nav = document.querySelector('.header__nav-container');
		nav.classList.toggle('header__nav-container--toggle-show');
	};

	navigationEvent = (label) => {
		ga('send', 'event', {
			eventCategory: 'Navigation',
			eventAction: 'click',
			eventLabel: label
		});
	};

	render() {
		return (
			<React.Fragment>
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
							<a href="https://dilutedband.bandcamp.com/merch/" target="_blank" onClick={this.navigationEvent.bind(this, 'merch')}>
								MERCH
							</a>
							<a href="#shows" onClick={this.navigationEvent.bind(this, 'shows')}>SHOWS</a>
							<a href="#social" onClick={this.navigationEvent.bind(this, 'social')}>SOCIAL</a>
							<a href="#contact" onClick={this.navigationEvent.bind(this, 'contact')}>CONTACT</a>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
