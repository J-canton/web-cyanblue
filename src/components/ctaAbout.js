import React from 'react';
import {Link } from "react-router-dom";

class CtaAbout extends React.Component {
    constructor(props){
        super(props);   
    }
    render(){
        return (
            <div className="cta-about">
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        );
    }
  }
  
  export default CtaAbout;