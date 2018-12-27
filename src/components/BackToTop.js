import React from 'react';

export default class BackToTop extends React.Component {
	scrollFunction = () => {
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			document.getElementById('backToTopButton').style.display = 'block';
		} else {
			document.getElementById('backToTopButton').style.display = 'none';
		}
	};

	topFunction = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	componentDidMount() {
		const w = window;
		w.onscroll = () => {
			this.scrollFunction();
		};
	}

	render() {
		return (
			<div>
				<button
					onClick={this.topFunction}
					id="backToTopButton"
					title="Back to Top"
				>
					<i className="fas fa-arrow-up" />
					<div className="backToTopButton__text">Top</div>
				</button>
			</div>
		);
	}
}
