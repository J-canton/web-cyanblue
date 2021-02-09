import React from 'react';

class HalfJumbotron extends React.Component {
    render(){
      return (
        <div className="half-jumbotron-container">
            <div className="half-jumbotron-text">
                <h1>{this.props.title}</h1>
                <h2>{this.props.text}</h2>
            </div>
        </div>
      );
    }
  }
  
  export default HalfJumbotron;