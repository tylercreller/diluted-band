import React from 'react';
const MediaContent = () => (
	<div>
		<div className="container">
			<div className="media-content">
				<div className="media-content__video">
					<div className="media-content__video__container">
						<iframe
							src="https://www.youtube.com/embed/rFDT8q5LEDg"
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
				<div className="media-content__image">
					<img
						className="media-content__image__album-cover"
						src={'images/lb-album-art-cropped.min.jpg'}
						title="New Album 'Legitimate Bastard' out now!"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default MediaContent;
