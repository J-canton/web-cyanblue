import Brand from '../assets/img/brand.png';

function MainNav() {
  return (
    <div className="mainnav-container">
      <div className="mainnav-brand">
        <img src={Brand}/>      
      </div>
      <ul>
        <li><a>About</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  );
}

export default MainNav;