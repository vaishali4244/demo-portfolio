import React from 'react';
import './skills.css';
import {
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



const Skills = ({ skillsData, id }) => {
  return (
    <section id={id} className='skills-container'>
      <h3 id='about-heading'>Skills</h3>
      <article className="skills-content">
        {skillsData
          .sort((a, b) => a?.sequence - b?.sequence)
          .filter((item) => item?.enabled === true)
          .map(data => {
            return (
              <div key={data._id} className='skills-card'>

                <p>{data?.name}</p>

                <CircularProgressbarWithChildren value={data?.percentage}>

                  <img
                    className='skills-img'
                    src={data?.image.url}
                    alt="skills"
                  />

                </CircularProgressbarWithChildren>
              </div>

            )
          })
        }
      </article>
    </section >
  )
}

export default Skills
