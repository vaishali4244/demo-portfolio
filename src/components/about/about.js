import React from 'react';
import './about.css';
import { motion } from "framer-motion";

const About = ({ aboutData, aboutImg, id }) => {


  return (
    <section id={id} className='about-container'>
      <h3 className='about-heading'>ABOUT ME</h3>
      <main className='about-content'>

        <motion.img
          animate={{
            borderRadius: ['10%', '50%', '10%'],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className='about-img '
          src={aboutImg}
          alt="profile " />
        <div className="about-details">

          <p>{[aboutData.description]}</p>
          <div className="more-details">
            <p>Name : <span className='charges'>{[aboutData?.name]}</span></p>
            <p>Email : <span className='charges'>{[aboutData?.contactEmail]}</span></p>
            <p>Address : <span className='charges'>{[aboutData?.address]}</span></p>
            <p>Quote : <span className='charges'>{[aboutData?.quote]}</span> </p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default About;
