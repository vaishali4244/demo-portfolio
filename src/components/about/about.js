import React from "react";
import "./about.css";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const About = ({ aboutData, aboutImg, id }) => {
  return (
    <motion.section
      id={id}
      className="about-container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h3 className="about-heading">ABOUT ME</motion.h3>
      <main className="about-content">
        <motion.img
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{
            scale: [1, 0.7, 1, 0.7, 1],
            opacity: [1, 0.4, 1, 0.4, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="about-img "
          src={aboutImg}
          alt="profile "
        />

        <div className="about-details">
          <motion.p
            initial={{ scale: 0.1 }}
            animate={{
              scale: [1],
            }}
            transition={{
              duration: 5,
              // repeat: Infinity,
            }}
          >
            {[aboutData.description]}
          </motion.p>

          <div className="more-details">
            <p>
              Name : <span className="charges">{[aboutData?.name]}</span>
            </p>
            <p>
              Email :{" "}
              <span className="charges">{[aboutData?.contactEmail]}</span>
            </p>
            <motion.p
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}
            >
              Address : <span className="charges">{[aboutData?.address]}</span>
            </motion.p>
            <p>
              Quote : <span className="charges">{[aboutData?.quote]}</span>{" "}
            </p>
          </div>
        </div>
      </main>
    </motion.section>
  );
};

export default About;
