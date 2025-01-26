import React from 'react';
import './about.css';
import  Testimony from "../../components/testimony/testimony"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faLaptopCode, faRobot } from '@fortawesome/free-solid-svg-icons'; // Font Awesome icons

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <div   className="Welcome">Welcome to VicoploEmpire</div>
        <p>Your ultimate partner in Media, Web Development, and AI.</p>
      </header>

      <div className="mission">
        <div className="miss">
        <h2>Our Mission</h2>
        <p>
         Our mission at VicoploEmpire is to bring your ideas to life with top-notch video production, media services, web development, and AI solutions. We aim to create digital experiences that inspire and help our clients succeed and grow in the modern world.
        </p>
        </div>
        <div className="miss"><img src="photo23.avif"  alt="" className="PhS" /></div>
      </div>

        <h2 className="OS">Our Services</h2>
      <div className="servicesNN">
        <div className="service-item">
          <div    className='FFont'>< FontAwesomeIcon icon={faBullhorn} className="service-icon" /></div>
          <div>
            <h3>Media Services</h3>
            <p>Comprehensive media solutions to enhance brand visibility and engagement.</p>
          </div>
        </div>
        <div className="service-item">
         <div  className='FFont'> < FontAwesomeIcon icon={faLaptopCode} className="service-icon" /></div>
          <div>
            <h3>Web Development</h3>
            <p>Responsive, user-friendly websites tailored to your business needs.</p>
          </div>
        </div>
        <div className="service-item">
          <div  className='FFont'><FontAwesomeIcon icon={faRobot}  className="service-icon" /></div>
          <div>
            <h3>AI Solutions</h3>
            <p>Intelligent systems to optimize operations and enhance user experiences.</p>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <div className="CH"><img  src="photo23.avif"   alt="" className="ddy"/></div>
        <div className="CH">
        <h2>Why Choose Us</h2>
        <ul  className="Ex">
          <li className='you'><strong>Expertise:</strong> Seasoned professionals with years of experience.</li>
          <li className='you'><strong>Innovation:</strong> Implementing the latest technologies to keep you competitive.</li>
          <li className='you'><strong>Customer-Centric:</strong> Collaborating closely to understand your goals and exceed expectations.</li>
        </ul>
        </div>
      </div>
      <Testimony/>

      {/* <footer className="contact">
        <h2>Contact Us</h2>
        <p>Let's create something extraordinary together. Get in touch with VicoploEmpire today!</p>
      </footer> */}
    </div>
  );
};

export default AboutUs;
