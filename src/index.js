import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './assets/styles.scss';
import Home from './containers/Home';
import Contact from './containers/Contact';
import About from './containers/About';
import Portfolio from './containers/Portfolio'
import MainNav from './components/mainNav';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainNav/>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/about" exact component={About} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
