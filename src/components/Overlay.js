import React from 'react';

export default class Overlay extends React.Component {
	state = {
		isHidden: false
	};
	handleAction = () => {
		window.open('https://unsubscribe.dilutedband.com', '_self', 'noreferrer');
	};
	dismissOverlay = () => {
		document.documentElement.classList.remove('no-scroll');
		this.setState(() => ({
			isHidden: true
		}));
	};
	render() {
		return (
			<React.Fragment>
				{!this.state.isHidden && (
					<div id="overlay" className="fade-in">
						<div className="overlay__content">
							<div className="overlay__title flicker">
								Incoming Transmission...
							</div>
							<div className="overlay__button-group">
								<button onClick={this.handleAction}>Unsubscribe.</button>
								<button onClick={this.dismissOverlay}>Continue to Site.</button>
							</div>
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}
