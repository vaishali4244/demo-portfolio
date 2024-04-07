import React from 'react';
import { motion } from "framer-motion";
import './services.css';

const Services = ({ serviceData, id }) => {
  return (
    <section id={id} className='service-container'>

      <h3 className='about-heading'>Services</h3>
      <article className="service-content">
        {serviceData
          .filter((item) => item?.enabled === true)
          .map(data => {
            return (
              <div key={data._id} className='service-card'>
                <h4 className='title'>{data?.name}</h4>
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='service-img' src={data?.image.url} alt="project" />
                <p>{data?.desc}</p>
                <p>Service charges :<span className='charges'> {data?.charge}</span> </p>
              </div>
            )
          }
          )}
      </article>
    </section>
  )
}

export default Services
