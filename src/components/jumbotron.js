import React from 'react';

class JumbotronComponent extends React.Component {
  render(){
    return (
      <header 
        className="jumbotron-container"
        style={{
          backgroundImage: `url(${this.props.img})`
        }}
      >
        <div className="jumbotron-veil"></div>
        <div className="jumbotron-text">
            <h1>{this.props.title}</h1>
            <h2>{this.props.text}</h2>
        </div>
      </header>
    );
  }
}

export default JumbotronComponent;