import Moment from 'react-moment';


function Footer() {
  return (
    <div className="footer-container">
      <p>
        <Moment format="YYYY"></Moment>
        <span> year &copy; All rights reserved</span>
      </p>
    </div>
  );
}

export default Footer;