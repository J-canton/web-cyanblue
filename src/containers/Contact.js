import HalfJumbotron from '../components/halfJumbotron';
import Form from '../components/contactForm';
import CtaContact from '../components/ctaContact';
import Footer from '../components/footer';

function Contact() {
  return (
  <div className="contact-big-container">
      <HalfJumbotron
        title='CONTACT'
        text="Have beginning wherein spirit. Bearing unto. To after light. Good image can't without hath fly beast him fish firmament fish Face waters fly unto spirit i doesn't one waters divide."
      />
      <Form title="Contact Me"/>
      <CtaContact/>
      <Footer/>
  </div>
  );
}

export default Contact;