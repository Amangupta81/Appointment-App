import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Image1 from './image1.jpg'
import Image2 from './image2.png'
import Image3 from './image3.jpg'
const Home = () => {
  const sectionsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });
    const sections = sectionsRef.current;
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section" ref={(el) => (sectionsRef.current[0] = el)}>
        <h1 className="hero-title">Welcome to Our Appointment Management System</h1>
        <p className="hero-description">
          Schedule and manage your appointments seamlessly. Our system is designed to help you stay organized and on time.
        </p>
        <Link to="/login" className="cta-button">Get Started</Link>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <div className="image-group" ref={(el) => (sectionsRef.current[1] = el)}>
          <img src={Image1} alt="Feature 1" className="feature-image" />
          <div className="image-text">
            <h3>Effortless Appointment Scheduling</h3>
            <p>Organize your time with our easy-to-use appointment scheduling feature, designed to streamline your day.</p>
          </div>
        </div>
        <div className="image-group" ref={(el) => (sectionsRef.current[2] = el)}>
          <img src={Image2} alt="Feature 2" className="feature-image" />
          <div className="image-text">
            <h3>Seamless Calendar Sync</h3>
            <p>Integrate with your calendar to avoid double-booking and keep track of all your appointments in one place.</p>
          </div>
        </div>
        <div className="image-group" ref={(el) => (sectionsRef.current[3] = el)}>
          <img src={Image3} alt="Feature 3" className="feature-image" />
          <div className="image-text">
            <h3>Advanced User Management</h3>
            <p>Manage multiple users effortlessly with access permissions and shared account features.</p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="introduction-section" ref={(el) => (sectionsRef.current[1] = el)}>
        <h2 className="introduction-title">Why Our Appointment Management System?</h2>
        <p className="introduction-description">
          Our system simplifies the scheduling process with intuitive features and a user-friendly interface, ensuring 
          you never miss a meeting or consultation.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="important-features" ref={(el) => (sectionsRef.current[2] = el)}>
        <h2 className="features-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Easy Booking</h3>
            <p>Book your appointments in just a few clicks using our intuitive interface.</p>
          </div>
          <div className="feature-card">
            <h3>Calendar Integration</h3>
            <p>Sync with your existing calendars for a unified view of all your appointments.</p>
          </div>
          <div className="feature-card">
            <h3>Multi-User Access</h3>
            <p>Allow multiple users to manage their appointments from one account.</p>
          </div>
          <div className="feature-card">
            <h3>Customizable Settings</h3>
            <p>Tailor your experience with customizable appointment types and durations.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section" ref={(el) => (sectionsRef.current[3] = el)}>
        <h2 className="testimonials-title">What Our Users Say</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <p>"This system changed how I schedule my appointments. It’s so easy to use!"</p>
            <h4>- Alex J.</h4>
          </div>
          <div className="testimonial-item">
            <p>"The reminders help me stay on track. I haven't missed a meeting since!"</p>
            <h4>- Sarah W.</h4>
          </div>
          <div className="testimonial-item">
            <p>"Great support team! They helped me get started quickly, and the system is super intuitive."</p>
            <h4>- Mike R.</h4>
          </div>
        </div>
      </div>
      {/* Service Overview Section */}
      <div className="service-overview" ref={(el) => (sectionsRef.current[4] = el)}>
        <h2 className="overview-title">Why Choose Us?</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Streamlined Scheduling</h3>
            <p>Book appointments effortlessly and reduce no-shows with automated reminders.</p>
          </div>
          <div className="service-item">
            <h3>Advanced Security</h3>
            <p>We prioritize your privacy with end-to-end encryption and data protection.</p>
          </div>
          <div className="service-item">
            <h3>Comprehensive Support</h3>
            <p>Our team is here to assist you 24/7 with any questions or issues.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
