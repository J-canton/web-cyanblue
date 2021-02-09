import Jumbotron from '../components/jumbotron';
import CtaText from '../components/ctaText';
import Footer from '../components/footer';
import jumbotronImg from '../assets/img/jumbotron.png';
import CtaContact from '../components/ctaContact';
function Home() {
  return (
  <div className="big-container">
    <Jumbotron
      title='CYAN BLUE!'
      text = "Have beginning wherein spirit. Bearing unto. To after light. Good image can't without hath fly beast him fish firmament fish Face waters fly unto spirit i doesn't one waters divide."
      img = {jumbotronImg}
    />
    <CtaText
      title='Hi! Im Mismo'
      text = 'Lorem Impsum dolor sit amet ...'
      url='/about'
    />
    <CtaContact/>
    <Footer/>
  </div>
  );
}

export default Home;