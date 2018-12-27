import React from 'react';
import Social from './Social';
import Shows from './Shows';
import Streaming from './Streaming';
import MediaContent from './MediaContent';
import Contact from './Contact';
import BackToTop from './BackToTop';

const BodyContent = () => (
	<div className="body-content">
		<MediaContent />
		<Streaming />
		<Shows />
		<Social />
		<Contact />
		<BackToTop />
	</div>
);

export default BodyContent;
