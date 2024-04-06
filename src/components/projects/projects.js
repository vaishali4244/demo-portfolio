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
      <h3 className='about-heading'>Projects</h3>
      <input type='search' onChange={(e) => { setSearch(e.target.value); console.log(e.target.value) }}
        value={search} placeholder='Search by skills' />
      <article className="content">
        {projectData
          .sort((a, b) => a?.sequence - b?.sequence)
          .filter((item) => item?.enabled === true)
          .map(data => {
            return (
              <div key={data._id}  
              onClick={() => onOpenModal(data)}className='project-card'>

                <h4 className='title'>{data?.title}</h4>
                <img className='project-img' src={data?.image.url} alt="project" />
                <p>Skills : {data?.techStack.join(', ')}</p>
              </div>
            )
          })
        }
      </article>
      <Modal  
      open={openModal} 
      onClose={onCloseModal}
      center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={800}
        >
        {selectedProject && (
          <div className='modal-card'>
            <h4 className='title'> {selectedProject.title}</h4>
            <img className='modal-img' src={selectedProject.image.url} alt="project" />
            <p>Skills :<span className="skills-name" > {selectedProject.techStack.join(', ')}</span></p>
            <p> {selectedProject.description}</p>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Projects;
