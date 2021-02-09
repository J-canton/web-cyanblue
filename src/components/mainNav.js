import React from 'react';
import {Link } from "react-router-dom";
import Brand from '../assets/img/brand.png';

class MainNav extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      about:false,
      portfolio: false,
      news: false,
      contact: false
    }
  }

  handleClick = (index)=>{
    console.log('E->', index)
  }

  render(){
    return (
      <header className="mainnav-container">
        <div className="mainnav-brand">
            <Link to="/">
              <img src={Brand} alt=""/>
            </Link>     
        </div>
        <ul>
          <li>
            <Link 
              to="/about"
              key='about'
              onClick={(() => this.handleClick(key))}
            >
              About
            </Link>
          </li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/news">Noticias</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
    );
  }
}

export default MainNav;