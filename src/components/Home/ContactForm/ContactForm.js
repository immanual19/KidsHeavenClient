import React from 'react';
import './ContactForm.css';
const ContactForm = () => {
    return (
        <div class="contact-form-container">
        <div style={{margin:'0 auto'}} className="w-75">
        <h1>Contact Us</h1>
        <p>Write us in details. Kids Heaven values every single feedback. Help us to take a better care of your child.</p>
        </div>
        
        <form>
          
          <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>
      
         
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      
          
          <select id="country" name="country">
            <option value="australia">Bangladesh</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
      
          
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
      
          <input type="submit" value="Submit"/>
        </form>
        </div>
    );
};

export default ContactForm;