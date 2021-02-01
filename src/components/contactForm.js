import React from 'react';
import emailjs from 'emailjs-com';

class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      name:'',
      email:'',
      subject: '',
      msg: ''
    };
    this.templateParams = {
      from_name: `${this.state.name} ( ${this.state.email} )`,
      feedback: `(${this.state.subject}) -> ${this.state.msg}`
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
      this.sendEmail();
    }
  }

  sendEmail = ()=>{
    emailjs
      .send("service_e1pgkut", "template_hymgfko", this.templateParams, 'user_tRjyqZ4k8zS0Cy5XozirE')
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          console.log('ERROR->', err)
        }
      );
  }


  
  render(){
    return(
      <div className="form-container">
        <h2>{this.props.title}</h2>
        <div className="form-content">
          <div className="form-textarea-content">
            <div className="form-input">
              <textarea 
                value={this.state.msg} 
                onChange={(msg)=>{this.setState({msg: msg.target.value})}} 
                placeholder="Write Message"
              /> 
            </div>
          </div>
          <div className="form-input-content">
            <div className="form-double-input">
              <div className="form-input">
                <input 
                  className="inputName" 
                  value={this.state.name} 
                  onChange={(name)=>{this.setState({name: name.target.value})}} 
                  placeholder="Your Name"
                />
              </div>
              <div className="form-input"> 
                <input 
                  className="inputEmail" 
                  value={this.state.email}
                  onChange={(email)=>{this.setState({email:email.target.value})}}
                  placeholder="Your Email"
                />
              </div>
            </div>
          </div>
          <div className="form-input">
            <input
              className="inputSubject full-input"
              value={this.state.subject}
              onChange={(subject)=>{this.setState({subject: subject.target.value})}} 
              placeholder="Subject"
            />
          </div>
          <div
            className="btn"
            onClick={this.sendForm}
          >
            <span>SEND</span>
          </div>
        </div>
      </div>
    )
  }
}
export default ContactForm;