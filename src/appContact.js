import React from 'react'
import contactImg from './components/Contact/aboutImage.jpeg'

const contactStyle = {
  backgroundImage:`url(${contactImg})`
}

const Contact = () => {
  return (
    <main className="contact-main" style={contactStyle}>
        <section className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-input">
                <label>Full Name :</label>
                <input type="text"  placeholder="John Doe"/>
            </div>

            <div className="contact-input">
                <label>Email :</label>
                <input type="email"  placeholder="johndoe@email.com"/>
            </div>

            <div className="contact-input">
                <label>Phone Number :</label>
                <input type="text" placeholder="(000)-000-000"/>
            </div>
            <div className="contact-input">
                <label>Message: <textarea></textarea></label>
            </div>
            <button className="contact-button">Submit</button>
        </section>
     </main>
  )
}

export default Contact