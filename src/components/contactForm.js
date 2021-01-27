import React from 'react';

class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name:'',
      email:'',
      subject: '',
      msg: ''
    };
  }

  isNotEmpty =(item)=>{
    if(item !== '' && item !== null && item !==undefined){
      console.log('TRUE')
      return true;
    }else{
      return false;
    }
  }

  isFormComplete = ()=>{
    if(this.isNotEmpty(this.state.name) && this.isNotEmpty(this.state.email) && this.isNotEmpty(this.state.subject) && this.isNotEmpty(this.state.msg)){
      return true;
    }else{
      return false;
    }
  }

  sendForm =(event)=>{
    event.preventDefault();
    console.log(this.isFormComplete());
    if(this.isFormComplete()){
      console.log('state->', this.state);
    }
  }


  
  render(){
    return(
      <div className="form-container">
        <h2>{this.props.title}</h2>
        <div className="form-content">
          <div className="form-textarea-content">
            <textarea 
              value={this.state.msg} 
              onChange={(msg)=>{this.setState({msg: msg.target.value})}} 
              placeholder="Write Message"
            /> 
          </div>
          <div className="form-input-content">
            <input 
              className="inputName" 
              value={this.state.name} 
              onChange={(name)=>{this.setState({name: name.target.value})}} 
              placeholder="Your Name"
            />  
            <input 
              className="inputEmail" 
              value={this.state.email}
              onChange={(email)=>{this.setState({email:email.target.value})}}
              placeholder="Your Email"/>
          </div>
          <input
          className="inputSubject"
          value={this.state.subject}
          onChange={(subject)=>{this.setState({subject: subject.target.value})}} 
          placeholder="Subject"/>
        </div>
        <div
          onClick={this.sendForm}
        >
          <span>SEND</span>
        </div>
      </div>
    )
  }
}
export default ContactForm;