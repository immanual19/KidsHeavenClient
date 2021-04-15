import React from 'react';
import './ContactForm.css';
const ContactForm = () => {
    return (
        <div class="contact-form-container">
        <h1>Contact Us</h1>
        <p>Let us help you to be familiar with KidsHeaven</p>
        <form>
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Bangladesh</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
      
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
      
          <input type="submit" value="Submit"/>
        </form>
        </div>
    );
};

export default ContactForm;