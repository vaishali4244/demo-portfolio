import React from 'react';
import './hero.css';
import { motion } from "framer-motion";

const Hero = ({aboutData, id}) => {

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 1},
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 1},
      y: -200,
    }
  };

  return (
    <header id={id} className='hero-container'>
      <motion.div
          initial="initial"
          animate="visible"
          exit="exit" 
          variants={variants} 
          className="hero-content">

      <motion.h1 drag onDragEnd dragConstraints={{ left: -250, right: 950, top: -200, bottom: 250 }}>I am <span id='name'>{[aboutData?.name]}</span>.</motion.h1>
      <motion.h2 drag onDragEnd dragConstraints={{ left: -250, right: 1250, top: -200, bottom: 250 }}>{[aboutData?.title]} <span> with {[aboutData?.exp_year]} years of experience.</span></motion.h2>
      <p>{[aboutData?.subTitle]}.</p>
    
      </motion.div>
     
      <motion.img animate={{
        borderRadius: ['10%', '50%', '10%'],
        rotate: [0, 10,0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}className='hero-img' src={aboutData?.avatar?.url} alt="profile " />
      {/* <motion.img whileHover={{ rotate: 5 }}  transition={{ type: "spring" }} className='hero-img' src={aboutData?.avatar?.url} alt="profile " /> */}
      
    </header>
  )
}

export default Hero;
