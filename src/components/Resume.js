import React from "react";
import "../styles/resume.css"; // Import the CSS file

const Resume = () => {
  return (
    <div className="resume-container">
      <h2 className="main_heading section-title">📄 Resume</h2>

      {/* Work Experience */}
      <div className="resume-section">
        <h3 className="work">💼 Work Experience</h3>

        <div className="resume-item">
          <h4>Shopify Developer | Techinfini <span>(1+ year)</span></h4>
          <ul>
            <li>Developed <strong>20+ Shopify stores</strong> with custom themes and performance optimization.</li>
            <li>Specialized in <strong>Liquid programming</strong> and custom functionality.</li>
            <li>Converted <strong>Figma designs</strong> into fully functional Shopify stores.</li>
            <li>Integrated third-party apps and enhanced store functionality.</li>
          </ul>
        </div>

        <div className="resume-item">
          <h4>QA Engineer | Walkover <span>(Previous Role)</span></h4>
          <ul>
            <li>Conducted <strong>automation and manual testing</strong> for software quality assurance.</li>
            <li>Executed <strong>functional, regression, and UI testing</strong>.</li>
            <li>Collaborated with developers to identify and resolve issues efficiently.</li>
          </ul>
        </div>
      </div>
  {/* Skills Section */}
  <div className="resume-section">
        <h3 className="work">📚 Skills & Technologies</h3>
        <p>
          <strong>Shopify Development</strong> | Store Setup | Theme Customization <br />
          <strong>Liquid, JavaScript, HTML, CSS</strong> | Custom Feature Development <br />
          <strong>App Integration</strong> | Shopify APIs <br />
          <strong>Automation & Manual Testing</strong> | Test Case Creation
        </p>
      </div>

      {/* Education Section */}
      <div className="resume-section">
        <h3 className="work">🎓 Education</h3>

        <div className="resume-item">
          <h4>Engineering in ECE - MIT Indore <span>(2023)</span></h4>
          <p>
          I earned my Bachelor's degree in <strong>Electronics and Communication Engineering</strong> from Malwa Institute of Technology, Indore (MP).  
            My studies focused on circuit design, signal processing, and embedded systems, alongside programming and analytical problem-solving.  
            This academic journey has strengthened my technical expertise and critical thinking skills, preparing me for real-world challenges in the tech industry.
          </p>
        </div>

        <div className="resume-item">
          <h4>Higher Secondary - Tagore Public School, Indore <span>(2019)</span></h4>
          <p> I completed my Higher Secondary Education with a focus on <strong>Physics, Chemistry, and Mathematics (PCM)</strong>.  
          This built a solid foundation in analytical thinking and problem-solving, which proved essential for my engineering studies.</p>
        </div>

        <div className="resume-item">
          <h4>Secondary Education - Columbia Convent School, Indore <span>(2017)</span></h4>
          <p>Successfully completed my 10th-grade education, gaining a strong academic foundation and essential learning skills.</p>
        </div>
      </div>

    

      {/* Contact Section */}
      <div className="resume-section">
        <h3 className="work">📞 Contact Me</h3>
        <p>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abhishek-mandloi-0120791a0" target="_blank" rel="noopener noreferrer">Abhishek Mandloi</a> <br />
          <strong>Email:</strong> <a href="mailto:mandloi.abhishek9451@gmail.com">mandloi.abhishek9451@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Resume;
