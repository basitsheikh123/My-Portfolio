import React from 'react'
import './Hero.css'
import profile from '../../assets/Profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='Hero'>
      <img src={profile} alt="Profile" className='hero-img' />
      <h1>
        <span>I’m Abdul Basit,</span> frontend developer based in Pakistan.
      </h1>
      <p>
        Creative Frontend Developer building modern and responsive web experiences.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
