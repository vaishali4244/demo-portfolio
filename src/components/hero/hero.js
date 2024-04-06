import React from 'react';
import './hero.css';

const Hero = ({aboutData, id}) => {
  return (
    <header id={id} className='hero-container'>
      <div className="hero-content">

      <h1>I am <span id='name'>{[aboutData?.name]}</span>.</h1>
      <h2>{[aboutData?.title]} <span> with {[aboutData?.exp_year]} years of experience.</span></h2>
      <p>{[aboutData?.subTitle]}.</p>
    
      </div>
     
      <img className='hero-img' src={aboutData?.avatar?.url} alt="profile " />
      
    </header>
  )
}

export default Hero;
