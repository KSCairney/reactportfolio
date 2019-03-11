import React, { Component } from 'react';
import './contact.css';
import ReactContactForm from 'react-mail-form';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="section">Contact</div>
        <div className="row">
          <div className="emailHolder">
            <ReactContactForm to="kscairney@gmail.com" className="emailer" titlePlaceholder="Your Email" contentsPlaceholder="Your Message" buttonText="Send Message"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;