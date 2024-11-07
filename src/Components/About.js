import React from 'react';
import './About.css';
import AmanImage from './aman.jpg'; // Importing the image

const About = () => {
  return (
    <div className="about-container-out">
      <div className="about-container">
        <p className="intro">
          Welcome to the Appointment Management System! We provide a seamless 
          scheduling experience tailored to meet your needs.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify appointment scheduling for individuals 
          and organizations alike, allowing you to focus on what truly matters.
        </p>
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={AmanImage} alt="Team Member 1" />
                <h3>Aman Gupta</h3>
                <p>CEO & Founder</p>
              </div>
              <div className="flip-card-back">
                <h3>Aman Gupta</h3>
                <p>Aman is the visionary behind our company. With years of experience in the industry, he leads the team with passion and dedication.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={AmanImage} alt="Team Member 2" /> {/* Using the imported image */}
                <h3>Aman Gupta</h3>
                <p>Lead Developer</p>
              </div>
              <div className="flip-card-back">
                <h3>Aman Gupta</h3>
                <p>Aman is responsible for all the technical developments. He ensures that our systems run smoothly and efficiently.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={AmanImage} alt="Team Member 3" />
                <h3>Aman Gupta</h3>
                <p>UI/UX Designer</p>
              </div>
              <div className="flip-card-back">
                <h3>Aman Gupta</h3>
                <p>Aman designs intuitive and beautiful interfaces. His work ensures a delightful user experience for all our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
