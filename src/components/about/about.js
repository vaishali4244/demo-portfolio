import React from 'react';
import './about.css';

const About = ({ aboutData, aboutImg, id }) => {
  return (
    <section id={id} className='about-container'>
      <h3 id='about-heading'>ABOUT ME</h3>
      <main className='about-content'>

        <img className='about-img' src={aboutImg} alt="profile photo" />
        <div className="about-details">

          <p>{[aboutData.description]}</p>
          <div className="more-details">
            <p>Name:{[aboutData?.name]}</p>
            <p>Email:{[aboutData?.contactEmail]}</p>
            <p>Address:{[aboutData?.address]}</p>
            <p>Quote:{[aboutData?.quote]}</p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default About;
