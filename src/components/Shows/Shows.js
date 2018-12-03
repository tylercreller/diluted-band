import React from 'react';
import './Shows.scss';

const Shows = () => (
	<div id="shows" className="shows">
		<h1 className="shows__section-header">Upcoming Shows</h1>
		<div className="shows__songkick-widget">
			<a
				href="https://www.songkick.com/artists/5656194"
				className="songkick-widget"
				data-theme="dark"
				data-detect-style="true"
				data-font-color="#e6e0e0"
				data-background-color="transparent"
			/>
		</div>
	</div>
);

export default Shows;
