import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Background from './components/Background';
import BodyContent from './components/BodyContent';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Layout = () => (
	<div>
		<Background />
		<Header />
		<BodyContent />
		<Footer />
	</div>
);

ReactDOM.render(<Layout />, document.getElementById('app'));
