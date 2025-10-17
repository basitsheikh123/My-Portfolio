import React from 'react'
import './About.css'
import Theme_pattern from '../../assets/About.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>

      <div className="about-section">
        {/* LEFT - Image */}
        <div className="about-left">
          <img src={Theme_pattern} alt="About Me" />
        </div>

        {/* RIGHT - Content */}
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I’m a passionate Frontend Developer who loves turning ideas into beautiful and functional websites.
              I enjoy working with React, JavaScript, and modern CSS to build smooth and responsive user interfaces.
            </p>
            <p>
              My goal is to create designs that not only look good but also give users a great experience.
              Always learning, improving, and exploring new technologies to grow as a developer.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React Js</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Next Js</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
