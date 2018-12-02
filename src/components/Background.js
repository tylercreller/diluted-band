import React from 'react';

const BgImageStyles = {
	position: 'fixed',
	left: 0,
	right: 0,
	zIndex: -1,
	display: 'block',
	backgroundImage: "url('images/bg.jpg')",
	height: '100%',
	filter: 'blur(5px)'
};
const Background = () => <div style={BgImageStyles} />;

export default Background;
