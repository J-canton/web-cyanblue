import HalfJumbotron from '../components/halfJumbotron';
import Form from '../components/contactForm';
import CtaContact from '../components/ctaContact';
import Footer from '../components/footer';
import jumbotronImg from '../assets/img/jumbotron.png';

function Contact() {
  return (
  <div className="big-container">
      <HalfJumbotron
        title='CONTACT'
        img={jumbotronImg}
      />
      <Form title="Contact Me"/>
      <CtaContact/>
      <Footer/>
  </div>
  );
}

export default Contact;