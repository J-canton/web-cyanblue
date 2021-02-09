import React from 'react';
import HalfJumbotron from '../components/halfJumbotron';
import jumbotronImg from '../assets/img/jumbotron.png';
import CtaContact from '../components/ctaContact';
import Footer from '../components/footer';

function News (){
    return(
        <div className="big-container">
            <HalfJumbotron
                title='NEWS'
                img={jumbotronImg}
            />
            <CtaContact/>
            <Footer/>
        </div>
    )
}

export default News;