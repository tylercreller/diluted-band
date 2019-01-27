import React from 'react';

const Contact = () => (
	<React.Fragment>
		<div className="container container--black">
			<div id="contact" className="contact">
				<h1 className="section-header">Contact</h1>
				<div className="contact__email">
					<i className="fas fa-envelope-square fa-2x contact__email__icon" />
					<div className="contact_email_address">
						<a href="mailto:dilutedband1@gmail.com">dilutedband1@gmail.com</a>
					</div>
				</div>
			</div>
		</div>
	</React.Fragment>
);

export default Contact;
