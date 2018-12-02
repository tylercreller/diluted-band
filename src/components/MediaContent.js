import React from 'react';

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
const MediaContent = () => {
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

export default MediaContent;
