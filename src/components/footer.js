import Moment from 'react-moment';


function Footer() {
  return (
    <footer className="footer-container">
      <p>
        <Moment format="YYYY"></Moment>
        <span> year &copy; All rights reserved</span>
      </p>
    </footer>
  );
}

export default Footer;