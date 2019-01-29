import React from 'react';

export default class Streaming extends React.Component {

	navigationEvent = (label) => {
		gtag('event', 'click', {
			event_category: 'Streaming Navigation',
			event_label: label
		});
	};

	render() {
		return (
			<div className="streaming" >
				<h1 className="section-header">
					Latest Album <i>"Legitimate Bastard"</i> out now!
			</h1>
				<a href="https://play.google.com/store/music/artist/Diluted?id=A5vybfcdudppw7aubujmwg7yyl4&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
					target="_blank"
					onClick={this.navigationEvent.bind(this, 'Google Play')}>
					<img
						className="streaming__icon"
						alt="Get it on Google Play"
						src={'images/google_badge_web_generic.png'}
					/>
				</a>
				<a href="https://itunes.apple.com/us/artist/diluted/id1065739761"
					target="_blank"
					onClick={this.navigationEvent.bind(this, 'Apple Music')}>
					<img
						className="streaming__icon"
						src={'images/Apple_Music_Badge_RGB.svg'}
					/>
				</a>
				<a href="https://play.spotify.com/artist/4ZPhc8ae5kgfX6UjKc0g73"
					target="_blank"
					onClick={this.navigationEvent.bind(this, 'Spotify')}>
					<img
						className="streaming__icon"
						src={'images/Spotify_Logo_RGB_Green.png'}
					/>
				</a>
			</div>
		)
	}

};
