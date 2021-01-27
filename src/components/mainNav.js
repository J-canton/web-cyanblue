import {Link } from "react-router-dom";
import Brand from '../assets/img/brand.png';

function MainNav() {
  return (
    <div className="mainnav-container">
      <div className="mainnav-brand">
          <Link to="/">
            <img src={Brand} alt=""/>
          </Link>     
      </div>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default MainNav;