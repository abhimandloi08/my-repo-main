import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css"; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_ljf9rla",  // Replace with your EmailJS service ID
        "template_fdhvkvb", // Replace with your EmailJS template ID
        {
          name: formData.name,
          message: formData.message,
          email: formData.email,
        },
        "H4GIOD12iqqo6cDPZ" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="main_heading section-title">📞 Contact Me</h2>
      <p className="contact-intro">
        Feel free to reach out for collaborations or any inquiries.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
