import React from 'react';

const Shows = () => (
	<div
		id="shows"
		style={{
			paddingTop: '30px',
			marginTop: '50px',
			paddingBottom: '30px',
			backgroundColor: 'black'
		}}
	>
		<h1
			style={{
				color: 'white',
				fontFamily: '"Sedgwick Ave", Times, serif',
				textAlign: 'center'
			}}
		>
			Upcoming Shows
		</h1>
		<div style={{ margin: '0 275px' }}>
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
