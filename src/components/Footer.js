import React from 'react';

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

export default Footer;
