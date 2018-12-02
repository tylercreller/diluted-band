import React from 'react';

const HeaderNavContainerStyles = {
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 275px 0 50px',
	width: '450px'
};
const HeaderNavItemStyles = {
	color: 'white',
	fontFamily: '"Josefin Sans", Times, serif',
	fontSize: '20px',
	textDecoration: 'none'
};
const LogoStyles = {
	width: '200px',
	padding: '35px 50px 35px 275px'
};
const Header = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}
		>
			<div>
				<img src={'images/DiludedLogo.png'} style={LogoStyles} />
			</div>
			<div style={HeaderNavContainerStyles}>
				<div>
					<a
						href="https://dilutedband.bandcamp.com/merch/"
						style={HeaderNavItemStyles}
					>
						MERCH
					</a>
				</div>
				<div>
					<a href="#shows" style={HeaderNavItemStyles}>
						SHOWS
					</a>
				</div>
				<div>
					<a href="#social" style={HeaderNavItemStyles}>
						SOCIAL
					</a>
				</div>
				<div>
					<a
						href="mailto:dilutedband1@gmail.com"
						target="_blank"
						style={HeaderNavItemStyles}
					>
						CONTACT
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
