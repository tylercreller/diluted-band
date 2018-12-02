import React from 'react';

const IconStyles = {
	height: 60,
	maxWidth: 200,
	padding: '0px 20px 20px',
	margin: '0 auto'
};
const WhereToListenStyles = {
	margin: '0 auto',
	width: '50%',
	textAlign: 'center',
	paddingTop: '100px'
};
const Streaming = () => (
	<div style={WhereToListenStyles}>
		<h1 style={{ fontFamily: '"Sedgwick Ave", Times, serif', color: 'white' }}>
			Available Now:
		</h1>
		<a href="https://play.google.com/store/music/artist/Diluted?id=A5vybfcdudppw7aubujmwg7yyl4&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
			<img
				style={IconStyles}
				alt="Get it on Google Play"
				src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
			/>
		</a>
		<a href="https://itunes.apple.com/us/artist/diluted/id1065739761">
			<img src={'images/Apple_Music_Badge_RGB.svg'} style={IconStyles} />
		</a>
		<a href="https://play.spotify.com/artist/4ZPhc8ae5kgfX6UjKc0g73">
			<img src={'images/Spotify_Logo_RGB_Green.png'} style={IconStyles} />
		</a>
	</div>
);

export default Streaming;
