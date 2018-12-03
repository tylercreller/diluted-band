import React from 'react';
import './Streaming.scss';

const Streaming = () => (
	<div className="streaming">
		<h1 style={{ fontFamily: '"Sedgwick Ave", Times, serif', color: 'white' }}>
			Available Now:
		</h1>
		<a href="https://play.google.com/store/music/artist/Diluted?id=A5vybfcdudppw7aubujmwg7yyl4&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
			<img
				className="streaming__icon"
				alt="Get it on Google Play"
				src={'images/google_badge_web_generic.png'}
			/>
		</a>
		<a href="https://itunes.apple.com/us/artist/diluted/id1065739761">
			<img
				className="streaming__icon"
				src={'images/Apple_Music_Badge_RGB.svg'}
			/>
		</a>
		<a href="https://play.spotify.com/artist/4ZPhc8ae5kgfX6UjKc0g73">
			<img
				className="streaming__icon"
				src={'images/Spotify_Logo_RGB_Green.png'}
			/>
		</a>
	</div>
);

export default Streaming;
