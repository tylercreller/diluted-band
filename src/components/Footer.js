import React from 'react';

const Footer = () => {
	const d = new Date();
	return (
		<div className="footer">
			<div className="footer__content">
				<div className="footer__author">Site by Tyler Creller</div>
				<div>Copyright © {d.getFullYear()} Diluted</div>
			</div>
		</div>
	);
};

export default Footer;
