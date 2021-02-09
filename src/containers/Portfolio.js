import HalfJumbotron from '../components/halfJumbotron';
import Footer from '../components/footer';
import CtaContact from '../components/ctaContact';
import Carrousel from '../components/swiper';

function Portfolio() {
    return (
    <div className="big-container">
        <HalfJumbotron
            title='PORTFOLIO'
        />
        <Carrousel
            title="JUEGOS"
        />
        <Carrousel
            title="DISEÑO"
        />
        <Carrousel
            title="3D"
        />
        <CtaContact/>
        <Footer/>
    </div>
    );
  }
  
  export default Portfolio;