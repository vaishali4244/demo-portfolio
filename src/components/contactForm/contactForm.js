import React, { useState } from "react";
import "./contactForm.css";
import { motion } from "framer-motion";

const ContactForm = ({ aboutData, socialData, id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section id={id} className="contact-container">
        <h3 className="about-heading">Get in Touch</h3>
        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 5px white ",
                }}
                type="submit"
              >
                Submit
              </motion.button>
            </form>
          </div>
          <div className="contact-data">
            <div className="contact-info">
              <img src={require("../../assets/images/address.png")} alt="" />
              <p>{[aboutData.address]}</p>
            </div>
            <div className="contact-info">
              <img src={require("../../assets/images/telephone.png")} alt="" />
              <p>{[aboutData.phoneNumber]}</p>
            </div>
            <div className="contact-info">
              <img src={require("../../assets/images/email.png")} alt="" />
              <p>{[aboutData.contactEmail]}</p>
            </div>
            <div className="social-handles">
              {socialData
                .filter((item) => item?.enabled === true)
                .map((data) => {
                  return (
                    <div key={data._id} className="social-card">
                      <motion.img
                        whileHover={{
                          scale: 1.2,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="social-img"
                        src={data?.image.url}
                        alt="project "
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-container">
        <p>Copyright &copy; 2023. All rights reserved.</p>
        <p> Developed by {aboutData?.name}.</p>
      </footer>
    </>
  );
};

export default ContactForm;
