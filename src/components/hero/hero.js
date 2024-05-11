import React from "react";
import "./hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = ({ aboutData, id }) => {
  return (
    <header id={id} className="hero-container">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0,
        }}
        className="hero-content"
      >
        <h1>
          I am{" "}
          <span id="name">
            <Typewriter
              words={[aboutData?.name + "."]}
              loop={false}
              cursor
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={150}
            />
          </span>
        </h1>

        <motion.h2>
          {[aboutData?.title]}{" "}
          <span> with {[aboutData?.exp_year]} years of experience.</span>
        </motion.h2>
        <p>{[aboutData?.subTitle]}.</p>
      </motion.div>

      <motion.img
        animate={{
          borderRadius: ["10%", "50%", "10%"],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="hero-img"
        src={aboutData?.avatar?.url}
        alt="profile "
      />
    </header>
  );
};

export default Hero;
