import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Background from './Background';
import BodyContent from './BodyContent';
import Overlay from './Overlay';

export default class Layout extends React.Component {
	state = {
		showMessage: false
	};
	hideMessage = () => {
		this.setState(() => ({
			showMessage: false
		}));
	};
	render() {
		return (
			<React.Fragment>
				{this.state.showMessage && (
					<Overlay hideMessageCallback={this.hideMessage} />
				)}
				{!this.state.showMessage && (
					<React.Fragment>
						<Background />
						<Header />
						<BodyContent />
						<Footer />
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}
