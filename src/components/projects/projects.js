import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './projects.css';

const Projects = ({ id, search, setSearch }) => {
  const [projectData, setProjectData] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null);


  useEffect(() => {
    axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`)
      .then(res => {
        if (search?.length === 0) {
          setProjectData(res?.data?.user?.projects)
        } else {
          const filteredData = res?.data?.user?.projects.filter((item) => {
            return (
              item?.techStack.some(stackItem => stackItem.toLowerCase().includes(search.toLowerCase()))
            )
          })
          console.log(filteredData, "filtered title");
          setProjectData(filteredData);
        }
      }).catch(err => {
        console.log("error", err)
      });
  }, [search])

  const onOpenModal = (data) => {
    setSelectedProject(data);
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section id={id} className='project-container'>
     <h3 id='about-heading'>Projects</h3>
      <input type='search' onChange={(e) => { setSearch(e.target.value); console.log(e.target.value) }}
        value={search} placeholder='search by skills' />
      <article className="content">
        {projectData
          .sort((a, b) => a?.sequence - b?.sequence)
          .filter((item) => item?.enabled === true)
          .map(data => {
            return (
              <div key={data._id} className='project-card'>

                <p>title:{data?.title}</p>
                <img src={data?.image.url} onClick={() => onOpenModal(data)} alt="project" />
                <p>techStack:{data?.techStack.join(', ')}</p>
              </div>
            )
          })
        }
      </article>
      <Modal open={openModal} onClose={onCloseModal}>
        {selectedProject && (
          <>
            <p>title: {selectedProject.title}</p>
            <img src={selectedProject.image.url} alt="project" />
            <p>techStack: {selectedProject.techStack.join(', ')}</p>
            <p>description: {selectedProject.description}</p>
          </>
        )}
      </Modal>
    </section>
  )
}

export default Projects;
