import React from 'react';
import Social from './Social';
import Shows from './Shows';
import Streaming from './Streaming';
import MediaContent from './MediaContent';

const BodyContent = () => (
	<div className="body-content">
		<MediaContent />
		<Streaming />
		<Shows />
		<Social />
	</div>
);

export default BodyContent;
