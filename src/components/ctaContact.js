import React from 'react';
import {Link } from "react-router-dom";

class CtaContact extends React.Component {
    constructor(props){
        super(props);   
    }
    render(){
        return (
            <div className="cta-container">
                <div className="cta-contact">
                    <div className="cta-content">
                        <Link>
                            <img/>
                            <h3 className="cta-content-text">SUBSCRIBE MISMO</h3>
                        </Link>
                    </div>
                    <div className="cta-content">
                        <Link>
                            <img/>
                            <h3 className="cta-content-text">SUBSCRIBE MISMO</h3>
                        </Link>
                    </div>
                    <div className="cta-content">
                        <Link>
                            <img/>
                            <h3 className="cta-content-text">SUBSCRIBE MISMO</h3>
                        </Link>
                    </div>
                    <div className="cta-content">
                        <Link>
                            <img/>
                            <h3 className="cta-content-text">SUBSCRIBE MISMO</h3>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
  }
  
  export default CtaContact;