import React from 'react';
import './MediaContent.scss';

const MediaContent = () => (
	<div className="media-content">
		<div className="media-content__video">
			<iframe
				width="711"
				height="400"
				src="https://www.youtube.com/embed/7P3wYA4JpAE"
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
		<img
			className="media-content__album-cover "
			src={'images/lb-album-art-cropped.jpg'}
		/>
	</div>
);

export default MediaContent;
