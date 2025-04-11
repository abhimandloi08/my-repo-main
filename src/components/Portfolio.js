import React, { useState } from "react";
import "../styles/portfolio.css"; // Import the CSS file

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Podcast Monkey",
      description: "A podcast production service handling editing, social media content, and distribution for creators effortlessly.",
      link: "https://podcastmonkey.co/",
      image: `${process.env.PUBLIC_URL}/podcastmonkey.png`, // Full-page screenshot
    },
    {
      title: "Raan Cotton",
      description: "​RAAN offers eco-friendly, unbleached cotton wipes—plastic-free, biodegradable, and gentle for all ages.​",
      link: "https://raan.com/",
      image: `${process.env.PUBLIC_URL}/raan-cotton.png`,
    },
    {       
      title: "DesMirage",
      description: "Desmirage offers high-quality perfumes inspired by luxury fragrances, crafted with organic ingredients and eco-friendly packaging .​",
      link: "https://www.desmirage.com/",
      image: `${process.env.PUBLIC_URL}/desmirage.png`,
    },
    {
      title: "Appa Life",
      description: "AppaLife offers caffeine-free, mushroom-based energy shots for natural, jitter-free focus and vitality.",
      link: "https://www.appalife.com/",
      image: `${process.env.PUBLIC_URL}/appa-life.png`,
    },
    {
      title: "Blow Gas",
      description: "Blow Gas Co sells a variety of hemp products, including THCA flowers, vapes, and edibles.",
      link: "https://blowgas.com/",
      image: `${process.env.PUBLIC_URL}/blow-gas.png`,
    },
    {
      title: "Lammar Marie",
      description: "Lammar Marie offers gourmet popcorn with unique flavors, perfect for gifting or special occasions.",
      link: "https://lammarmarie.com/",
      image: `${process.env.PUBLIC_URL}/lammarmarie.png`,
    },
    {
      title: "Clean Pets",
      description: "Clean Pets offers natural wellness chews for pets, supporting gut health, joints, skin, and more.",
      link: "https://shopcleanpets.com/",
      image: `${process.env.PUBLIC_URL}/clean-pets.png`,
    },
    {
      title: "Kick It",
      description: "Kickit offers a fun and easy-to-play soccer tennis game, perfect for all ages and skill levels.",
      link: "https://kickit.net/",
      image: `${process.env.PUBLIC_URL}/kick-it.png`,
    },
    {
      title: "Native Ceuticals",
      description: "PureSkin Organic offers natural, organic skincare products for rejuvenation, protection, and nourishment without chemicals.",
      link: "https://pureskinorganic.com/",
      image: `${process.env.PUBLIC_URL}/pureskinorganic.png`,
    },
    {
      title: "Drink Miils",
      description: "​MIILS offers space-inspired meal shakes with 19g protein, 3g sugar, and crispy inclusions. ",
      link: "https://www.drinkmiils.com/",
      image: `${process.env.PUBLIC_URL}/miils.png`,
    },
    {
      title: "Doctor Skin Collagen",
      description: "Doctor Skin Collagen offers collagen-boosting skincare for youthful, firm, and radiant skin.",
      link: "https://doctorskincollagen.com/",
      image: `${process.env.PUBLIC_URL}/doctorskincollagen.png`,
    },
  ];

  return (
    <div className="portfolio-container">
      <h2 className="main_heading section-title">🛠️ Portfolio</h2>
      <p className="portfolio-intro">
        Here are some of the Shopify stores and landing pages I have worked on.
      </p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <h3>{project.title}</h3>
            <p class="project-desc">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>

            {/* Scrolling Image */}
            <div 
              className="scroll-container"
              onClick={() => setSelectedImage(project.image)}
            >
              <img src={project.image} alt={project.title} className="scroll-image" />
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-bottom">
        <h3>🔗 More...</h3>
        <div className="all-link">

        <a className="link-website" href="https://reviglow.com/" target="_blank" rel="noopener noreferrer">Revi Glow</a>
        <a className="link-website" href="https://hookyaproducts.com/" target="_blank" rel="noopener noreferrer">Hook Ya</a>
        <a className="link-website" href="https://strongrrsupplements.com/" target="_blank" rel="noopener noreferrer">Strongrr</a>
        <a className="link-website" href="https://naturefusionglow.com/" target="_blank" rel="noopener noreferrer">Nature Fusion Glow</a>
        <a className="link-website" href="https://everwellhemp.com/" target="_blank" rel="noopener noreferrer">Everwell Hamp</a>
        <a className="link-website" href="https://getmindright.com/" target="_blank" rel="noopener noreferrer">Mind Right</a>
        <a className="link-website" href="https://greenvirginproducts.com/" target="_blank" rel="noopener noreferrer">Green Virgin</a>

        <a className="link-website" href="https://www.desmirage.com/" target="_blank" rel="noopener noreferrer">DesMirage</a>
        <a className="link-website" href="https://strongrrsupplements.com/" target="_blank" rel="noopener noreferrer">Strongrr</a>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedImage(null)}>✖</span>
            <div className="modal-scroll-container">
              <img src={selectedImage} alt="Full Screenshot" className="modal-scroll-image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
