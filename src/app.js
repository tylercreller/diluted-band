import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Background from './components/Background';
import BodyContent from './components/BodyContent';
import Overlay from './components/Overlay';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Layout = () => (
	<React.Fragment>
		<Overlay />
		<Background />
		<Header />
		<BodyContent />
		<Footer />
	</React.Fragment>
);

ReactDOM.render(<Layout />, document.getElementById('app'));
