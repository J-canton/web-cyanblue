import React from 'react';

class CtaAbout extends React.Component {
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