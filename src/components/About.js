// src/components/About.js
import React from 'react';
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-section">
      <h2 class="main_heading">About Me</h2>
      <p>I’m Abhishek Mandloi, a <strong> Shopify Developer & Front-End Developer </strong>passionate about creating seamless, high-performing, and user-friendly eCommerce experiences.</p>

<p>My goal is to transform your ideas into a visually stunning and fully optimized Shopify store that reflects your brand identity. With expertise in <strong>theme customization, app integration, and performance optimization,</strong> I ensure your store not only looks great but also delivers a smooth shopping experience. I’ve worked with various brands to help them scale and strengthen their online presence.</p>

<p>Skilled in <strong>HTML, CSS, JavaScript, and Liquid,</strong> I build clean, responsive, and efficient solutions tailored to your business needs. Let’s collaborate to create something exceptional and elevate your Shopify store to the next level!</p>
<p><strong>Let’s collaborate to create a high-performing Shopify store that enhances your brand and drives results. Get in touch!</strong></p>
      <h3>What I'm Doing</h3>
      <div className="services">
        <div className="service-card">
          <i className="fas fa-pencil-ruler"></i>
          <h4>Web Design</h4>
          <p>The most modern and high-quality design made at a professional level.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-code"></i>
          <h4>Web Development</h4>
          <p>High-quality development of sites at the professional level.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-mobile-alt"></i>
          <h4>Shopify Optimization</h4>
<p>Improving speed, SEO, and performance to boost conversions and user experience.</p>

        </div>
        <div className="service-card">
          <i className="fas fa-camera"></i>
          <h4>App Integration</h4>
    <p>Seamlessly integrating third-party apps to enhance store functionality and user experience.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
    