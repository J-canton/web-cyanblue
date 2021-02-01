import React from 'react';
import {Link } from "react-router-dom";

class CtaText extends React.Component {
    constructor(props){
        super(props);   
    }
    render(){
        return (
            <div className="cta-container">
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
                <div className="btn">
                    <Link to={this.props.url}>
                        <span>Leer Mas</span>
                    </Link>  
                </div>
            </div>
        );
    }
  }
  
  export default CtaText;