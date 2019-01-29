import React from 'react';

export default class Social extends React.Component {

	navigationEvent = (label) => {
		gtag('event', 'click', {
			event_category: 'Social Navigation',
			event_label: label
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className="container container--red">
					<div id="social" className="social">
						<h1 className="section-header">Follow Us</h1>
						<div className="social__icons-container">
							<a href="https://www.instagram.com/dilutedband/" target="_blank" onClick={this.navigationEvent.bind(this, 'Instagram')}>
								<div className="social__icons-container__icon">
									<i className="fab fa-instagram fa-5x" />
								</div>
							</a>
							<a href="https://www.facebook.com/DilutedBand" target="_blank" onClick={this.navigationEvent.bind(this, 'Facebook')}>
								<div className="social__icons-container__icon">
									<i className="fab fa-facebook-f fa-5x" />
								</div>
							</a>
							<a href="https://twitter.com/dilutedband" target="_blank" onClick={this.navigationEvent.bind(this, 'Twitter')}>
								<div className="social__icons-container__icon">
									<i className="fab fa-twitter fa-5x" />
								</div>
							</a>
							<a href="https://soundcloud.com/dilutedband" target="_blank" onClick={this.navigationEvent.bind(this, 'Soundcloud')}>
								<div className="social__icons-container__icon">
									<i className="fab fa-soundcloud fa-5x" />
								</div>
							</a>
						</div>
					</div>
				</div >
			</React.Fragment >
		);
	}
}