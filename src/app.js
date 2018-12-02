import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Background from './components/Background';
import Content from './components/Content';

const Layout = () => (
	<div>
		<Background />
		<Header />
		<Content />
		<Footer />
	</div>
);

document.body.style.backgroundColor = '#211f20';
ReactDOM.render(<Layout />, document.getElementById('app'));
