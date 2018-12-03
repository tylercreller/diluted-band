import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import BodyContent from './components/BodyContent/BodyContent';

const Layout = () => (
	<div>
		<Background />
		<Header />
		<BodyContent />
		<Footer />
	</div>
);

document.body.style.backgroundColor = '#211f20';
ReactDOM.render(<Layout />, document.getElementById('app'));
