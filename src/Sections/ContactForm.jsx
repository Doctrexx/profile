/* eslint-disable react/no-unescaped-entities */
import { FaSquareXTwitter, FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

import '../styles/contactForm.css';

function ContactForm() {
  return (
    <>
      <div className='contact-container'>
        <h1>Contact</h1>

        <div className='contact-content'>
          <form className='contact-form' action="">
            <input placeholder='Name' type="text" name="name" />
            <input placeholder='Email' type="email" name="email" />
            <input placeholder='Phone Number' type="number" name="number" /><br />
            <button type="submit">Submit</button>
          </form>

          <h1>"Contact us and we'll make sure make this your last stop"</h1>
        </div>
      </div>

      <div className='social-icons'>
        <div className="social">
          <FaFacebook className="icons" />
          <FaGithub className="icons" />
          <FaSquareXTwitter className="icons" />
          <FaInstagram className="icons" />
          <FaLinkedin className="icons" />
        </div>
      </div>
    </>
  )
}

export default ContactForm;