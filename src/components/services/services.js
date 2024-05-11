import React from "react";
import { motion } from "framer-motion";
import "./services.css";
import { Typewriter } from "react-simple-typewriter";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 10,
      when: "beforeChildren",
      staggerChildrem: 4,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      // repeat: Infinity,
    },
  },
};

const Services = ({ serviceData, id }) => {
  return (
    <section id={id} className="service-container">
      <h3 className="about-heading">Services</h3>
      <article className="service-content">
        {serviceData
          .filter((item) => item?.enabled === true)
          .map((data) => {
            return (
              <motion.div
                key={data._id}
                className="service-card"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <h4 className="title">{data?.name}</h4>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="service-img"
                  src={data?.image.url}
                  alt="project"
                />
                <p>
                  <Typewriter
                    words={[data?.desc]}
                    loop={false}
                    typeSpeed={50}
                    deleteSpeed={120}
                    delaySpeed={500}
                  />
                </p>
                <motion.p variants={childrenVariants}>
                  Service charges :
                  <span className="charges">{data?.charge}</span>{" "}
                </motion.p>
              </motion.div>
            );
          })}
      </article>
    </section>
  );
};

export default Services;
