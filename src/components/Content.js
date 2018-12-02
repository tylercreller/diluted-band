import React from 'react';
import Social from './Social';
import Shows from './Shows';
import Streaming from './Streaming';
import MediaContent from './MediaContent';

const ContentStyles = {
	paddingTop: '25px'
};
const Content = () => (
	<div style={ContentStyles}>
		<MediaContent />
		<Streaming />
		<Shows />
		<Social />
	</div>
);

export default Content;
