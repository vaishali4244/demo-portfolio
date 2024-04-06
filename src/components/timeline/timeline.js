import React, { useState } from 'react';
import './timeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = ({ timelineData, workIcon, eduIcon }) => {

  const [expVisible, setExpVisible] = useState(true);
  const [eduVisible, setEduVisible] = useState(false);

  const HandleVisibility = (type) => {
    if (type === 'experience') {
      setExpVisible(true);
      setEduVisible(false);
    } else {
      setExpVisible(false);
      setEduVisible(true);
    }
  };


  return (
    <section className='timeline-container'>

      <h3 className='about-heading'>Timeline</h3>
      <div className="select-btn">
        <button className={expVisible ? 'active-timeline' : ''} onClick={() => HandleVisibility('experience')}>Experience</button>

        <button className={eduVisible ? 'active-timeline' : ''} onClick={() => HandleVisibility('education')}>Education</button>
      </div>
      <article className='timeline-content'>
        {expVisible && <div className="experience-content">
          <VerticalTimeline layout='2-columns' lineColor={"black"}>
            {
              timelineData
                .filter((item) => item?.enabled === true)
                .filter((item) => item?.forEducation === false)
                .map((data) => {
                  return (
                    <VerticalTimelineElement
                      key={data?._id}
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date={`${data?.startDate.substring(0, 7)} - ${data?.endDate.substring(0, 7)}`}
                      textClassName={"geee"}
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}
                      icon={workIcon}
                    >
                      <h3 className="vertical-timeline-element-title job-title">{data?.jobTitle}</h3>
                      <p className="vertical-timeline-element-subtitle" >{data?.company_name}  <span className='location'>{data?.jobLocation}</span></p>
                      <p>{data?.summary}</p>
                    </VerticalTimelineElement>

                  )
                })
            }
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            />
          </VerticalTimeline>
        </div>
        }
        {eduVisible && <div className="education-content">
          <VerticalTimeline layout='2-columns' lineColor={"black"}>
            {
              timelineData
                .filter((item) => item?.enabled === true)
                .filter((item) => item?.forEducation === true)
                .map((data) => {
                  return (
                    <VerticalTimelineElement
                      key={data?._id}
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date={`${data?.startDate.substring(0, 7)} - ${data?.endDate.substring(0, 7)}`}
                      textClassName={"geee"}
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', display: "flex", justifyContent: "center", alignItems: "center" }}
                      icon={eduIcon}
                    >
                      <h3 className="vertical-timeline-element-title job-title">{data?.jobTitle}</h3>
                      <p className="vertical-timeline-element-subtitle" >{data?.company_name}  <span className='location'>{data?.jobLocation}</span></p>
                      <p>{data?.summary}</p>
                    </VerticalTimelineElement>

                  )
                })
            }
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            />
          </VerticalTimeline>
        </div>
        }
      </article>




    </section>
  )
}

export default Timeline
