import React, { Component } from 'react';
import './contact.css';
import ReactContactForm from 'react-mail-form';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="section">Contact</div>
        <div className="row emailHolder">
          <form className="emailer" action="https://formspree.io/kscairney@gmail.com" method="POST">
            <input type="text" name="name" placeholder="Your name"/>
            <input type="email" name="_replyto" placeholder="Your email"/>
            <textarea name="message" placeholder="Your message"></textarea>
            <input className="submitter" type="submit" value="Send"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;