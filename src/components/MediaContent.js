import React from 'react';
const MediaContent = () => (
	<React.Fragment>
		<div className='container'>
			<div className='media-content'>
				<div className='media-content__video'>
					<div className='media-content__video__container'>
						<iframe
							src='https://www.youtube.com/embed/PIZUTCVSk_A'
							frameBorder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</div>
				<div className='media-content__image'>
					<img
						className='media-content__image__album-cover'
						src={'images/unsub-min.jpg'}
						title="Latest EP 'Unsubscribe' out 11.16.19!"
					/>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default MediaContent;
