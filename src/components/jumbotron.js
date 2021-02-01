import React from 'react';
class JumbotronComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="jumbotron-container">
          <div className="jumbotron-text">
              <h1>{this.props.title}</h1>
              <h2>{this.props.text}</h2>
          </div>
      </div>
    );
  }
}

export default JumbotronComponent;