import React from 'react';
import Social from '../Social/Social';
import Shows from '../Shows/Shows';
import Streaming from '../Streaming/Streaming';
import MediaContent from '../MediaContent/MediaContent';

import './BodyContent.scss';

const BodyContent = () => (
	<div className="body-content">
		<MediaContent />
		<Streaming />
		<Shows />
		<Social />
	</div>
);

export default BodyContent;
