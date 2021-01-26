import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles.scss';
import Home from './containers/Home';
import Footer from './components/footer';
import MainNav from './components/mainNav';


ReactDOM.render(
  <React.StrictMode>
    <MainNav/>
    <Home/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
