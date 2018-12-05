import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import BodyContent from './components/BodyContent/BodyContent';
import 'normalize.css/normalize.css';
import './shared/styles/_base.scss';

const Layout = () => (
	<div>
		<Background />
		<Header />
		<BodyContent />
		<Footer />
	</div>
);

ReactDOM.render(<Layout />, document.getElementById('app'));
