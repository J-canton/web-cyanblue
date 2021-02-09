import React from 'react';
import {Link } from "react-router-dom";
import ctaImg from '../assets/img/cta.jpg';

class CtaContact extends React.Component {
    render(){
        return (
            <div className="cta-container"
                style={{backgroundImage: `url(${ctaImg})`}}
            >
                <h3>MANTENTE AL DÍA</h3>
                <div className="cta-contact">
                    <div className="cta-content">
                        <Link to="#">
                            <img alt=""/>
                        </Link>
                    </div>
                    <div className="cta-content">
                        <Link to="#">
                            <img alt=""/>
                        </Link>
                    </div>
                    <div className="cta-content">
                        <Link to="#">
                            <img alt=""/>
                        </Link>
                    </div>
                    <div className="cta-content">
                        <Link to="#">
                            <img alt=""/>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
  }
  
  export default CtaContact;