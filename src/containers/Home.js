import MainNav from '../components/mainNav';
import Jumbotron from '../components/jumbotron';
import CtaText from '../components/ctaText';
function Home() {
  return (
  <div>
    <Jumbotron
      title='CYAN BLUE!'
      text = "Have beginning wherein spirit. Bearing unto. To after light. Good image can't without hath fly beast him fish firmament fish Face waters fly unto spirit i doesn't one waters divide."
    />
    <CtaText
      title='Hi! Im Mismo'
      text = 'Lorem Impsum dolor sit amet ...'
      url='/about'
    />
  </div>
  );
}

export default Home;