import React from 'react';

const Overlay = props => {
	return (
		<React.Fragment>
			<div className="overlay">
				<div className="overlay__container">
					<div className="typewriter block block-full">
						<h1>Incoming Transmission...</h1>
					</div>
					<form action="https://terminal.dilutedband.com/">
						<button type="submit">Go to Terminal</button>
					</form>
					<button onClick={props.hideMessageCallback}>Continue to Site</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Overlay;
