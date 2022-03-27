import React from "react";
import contactImg from "./components/Contact/aboutImage.jpeg";

const contactStyle = {
  backgroundImage: `url(${contactImg})`,
};

const Contact = () => {
  const bruh = () => {
    console.log("dudes be like");
  };
  
  return (
    <main className="contact-main" style={contactStyle}>
      <section className="contact-container">
        <form>
            <h1>Contact Us</h1>
            <div className="contact-input">
                <label>Full Name :</label>
                <input type="text" placeholder="John Doe" required />
            </div>

            <div className="contact-input">
                <label>Email :</label>
                <input type="email" placeholder="johndoe@email.com" required />
            </div>

            <div className="contact-input">
                <label>Phone Number :</label>
                <input
                    type="tel"
                    placeholder="000-000-0000"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                />
            </div>
            <div className="contact-input">
                <label>
                    Message: <textarea></textarea>
                </label>
            </div>
            <button className="contact-button" onClick={bruh}>
            Submit
            </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
