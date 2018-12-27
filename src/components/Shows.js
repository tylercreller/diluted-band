import React from 'react';

const Shows = () => (
	<div>
		<div className="container container--black">
			<div id="shows" className="shows">
				<h1 className="section-header shows__section-text">Upcoming Shows</h1>
				<div className="shows__songkick-widget">
					<a
						href="https://www.songkick.com/artists/5656194"
						className="songkick-widget"
						data-theme="dark"
						data-detect-style="true"
						data-font-color="#e6e0e0"
						data-background-color="transparent"
						data-font-size="100%"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Shows;
