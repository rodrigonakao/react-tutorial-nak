import React, { Component } from 'react';

class FormatNameComp extends Component {

  constructor(props){
    debugger
    super(props);
  }

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  };
  
  formatNameHTML() {
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };
    
    const element = (
      <h1>
        Hello, {this.formatName(user)}!        
      </h1>
    );  

    return element;
  }

  getGreeting(user) {    
    debugger
    if (user) {
      return <h1>Hello, {this.formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  render() {
    return (
      //this.formatNameHTML()
      this.getGreeting(this.props.user)
    );
  }
}

export default FormatNameComp;