import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				<BgImage />
				<HeaderContent />
				<Content />
				<Footer />
			</div>
		);
	}
}

const ContentStyles = {
	paddingTop: '25px'
};
const Content = () => {
	return (
		<div style={ContentStyles}>
			<AlbumArt />
			<WhereToListen />
			<Shows />
			<Social />
		</div>
	);
};

const BgImageStyles = {
	position: 'absolute',
	left: 0,
	right: 0,
	zIndex: -1,
	display: 'block',
	backgroundImage: "url('images/bg.jpg')",
	height: '100%',
	filter: 'blur(5px)'
};
const BgImage = () => {
	return <div style={BgImageStyles} />;
};

const ContainerStyles = {
	margin: '0 auto',
	width: '100%',
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	alignItems: 'center'
};
const AlbumArtStyles = {
	height: 480,
	width: 480,
	minWidth: 480,
	boxShadow: 'rgba(0, 0, 0, 0.75) 0px 13px 55px 24px',
	margin: '0px 275px 0px 0px'
};
const AlbumArt = () => {
	return (
		<div style={ContainerStyles}>
			<div
				style={{
					minWidth: '711px',
					margin: '0px 0px 0px 275px',
					boxShadow: 'rgba(0, 0, 0, 0.75) 0px 13px 55px 24px'
				}}
			>
				<iframe
					width="711"
					height="400"
					src="https://www.youtube.com/embed/7P3wYA4JpAE"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<div style={{ minWidth: '480px' }}>
				<img src={'images/lb-album-art-cropped.jpg'} style={AlbumArtStyles} />
			</div>
		</div>
	);
};

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
const WhereToListen = () => {
	return (
		<div style={WhereToListenStyles}>
			<h1
				style={{ fontFamily: '"Sedgwick Ave", Times, serif', color: 'white' }}
			>
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
};

const Shows = () => {
	return (
		<div
			id="shows"
			style={{
				paddingTop: '30px',
				marginTop: '50px',
				paddingBottom: '30px',
				backgroundColor: 'black'
			}}
		>
			<h1
				style={{
					color: 'white',
					fontFamily: '"Sedgwick Ave", Times, serif',
					textAlign: 'center'
				}}
			>
				Upcoming Shows
			</h1>
			<div style={{ margin: '0 275px' }}>
				<a
					href="https://www.songkick.com/artists/5656194"
					className="songkick-widget"
					data-theme="dark"
					data-detect-style="true"
					data-font-color="#e6e0e0"
					data-background-color="transparent"
				/>
			</div>
		</div>
	);
};

const HeaderNavContainerStyles = {
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 275px 0 50px',
	width: '450px'
};
const HeaderNavItemStyles = {
	color: 'white',
	fontFamily: '"Josefin Sans", Times, serif',
	fontSize: '20px',
	textDecoration: 'none'
};
const LogoStyles = {
	width: '200px',
	padding: '35px 50px 35px 275px'
};
const HeaderContent = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}
		>
			<div>
				<img src={'images/DiludedLogo.png'} style={LogoStyles} />
			</div>
			<div style={HeaderNavContainerStyles}>
				<div>
					<a
						href="https://dilutedband.bandcamp.com/merch/"
						style={HeaderNavItemStyles}
					>
						MERCH
					</a>
				</div>
				<div>
					<a href="#shows" style={HeaderNavItemStyles}>
						SHOWS
					</a>
				</div>
				<div>
					<a href="#social" style={HeaderNavItemStyles}>
						SOCIAL
					</a>
				</div>
				<div>
					<a
						href="mailto:dilutedband1@gmail.com"
						target="_blank"
						style={HeaderNavItemStyles}
					>
						CONTACT
					</a>
				</div>
			</div>
		</div>
	);
};

const SocialContainerStyles = {
	backgroundColor: '#a51d21',
	paddingTop: '30px',
	paddingBottom: '30px'
};
const SocialIconsStyles = {
	backgroundColor: '#a51d21',
	display: 'flex',
	justifyContent: 'center'
};
const SocialIconStyles = {
	padding: '15px'
};
const Social = () => {
	return (
		<div id="social" style={SocialContainerStyles}>
			<h1
				style={{
					color: 'white',
					fontFamily: '"Sedgwick Ave", Times, serif',
					textAlign: 'center'
				}}
			>
				Follow Us
			</h1>
			<div style={SocialIconsStyles}>
				<div style={SocialIconStyles}>
					<a href="https://www.instagram.com/dilutedband/" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							viewBox="0 0 24 24"
						>
							<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
						</svg>
					</a>
				</div>
				<div style={SocialIconStyles}>
					<a href="https://www.facebook.com/DilutedBand" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							viewBox="0 0 24 24"
						>
							<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
						</svg>
					</a>
				</div>
				<div style={SocialIconStyles}>
					<a href="https://twitter.com/dilutedband" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							viewBox="0 0 24 24"
						>
							<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z" />
						</svg>
					</a>
				</div>
				<div style={SocialIconStyles}>
					<a
						href="https://www.youtube.com/channel/UCCCIKJVlmfTYbZIqvoiupiw"
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							viewBox="0 0 24 24"
						>
							<path d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

const FooterStyles = {
	backgroundColor: '#000000',
	height: '50px',
	fontFamily: 'sans-serif',
	textAlign: 'center',
	color: 'white',
	fontSize: '12px'
};

const Footer = () => {
	const d = new Date();
	return (
		<div style={FooterStyles}>
			<div style={{ paddingTop: '10px' }}>Site by Tyler Creller</div>
			<div>Copyright © {d.getFullYear()} Diluted</div>
		</div>
	);
};

document.body.style.backgroundColor = '#211f20';
ReactDOM.render(<App />, document.getElementById('app'));
