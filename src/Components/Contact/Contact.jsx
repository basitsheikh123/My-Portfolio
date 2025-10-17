import React from 'react'
import './Contact.css'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "40ac40c2-ab68-474c-a1b3-2c5a7b2576a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Thank you! Your message has been sent successfully ✅");
      event.target.reset();
    } else {
      alert("Something went wrong. Please try again ❌");
    }
  };

  return (
    <div id='contact' className='Contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to send me
            a message about anything that you want me to work on. You can contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <MdEmail className="contact-icon" />
              <p>mrbasit7777@gmail.com</p>
            </div>

            <div className="contact-detail">
              <MdPhone className="contact-icon" />
              <p>03174735359</p>
            </div>

            <div className="contact-detail">
              <MdLocationOn className="contact-icon" />
              <p>Chappal Sun City, Scheme 33, Karachi, Sindh</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Write your Message</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
