import React, { useEffect, useState } from 'react';
import './timeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = ({ timelineData }) => {

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

      <p>timeline</p>
      <button className={expVisible ? 'active-timeline' : ''} onClick={() =>HandleVisibility('experience')}>Experience</button>
      <button className={eduVisible ? 'active-timeline' : ''} onClick={() => HandleVisibility('education')}>Education</button>
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
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      {/* <p> date={`${data?.startDate.substring(0, 7)} - ${data?.endDate.substring(0, 7)}`}</p> */}
                      <h3 className="vertical-timeline-element-title">Creative Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                      <p>{data?.company_name}</p>
                      <p>{data?.summary}</p>
                    </VerticalTimelineElement>

                  )
                })
            }
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
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                      {/* <p> date={`${data?.startDate.substring(0, 7)} - ${data?.endDate.substring(0, 7)}`}</p> */}
                      <h3 className="vertical-timeline-element-title">Creative Director</h3>
                      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                      <p>{data?.company_name}</p>
                      <p>{data?.summary}</p>
                    </VerticalTimelineElement>

                  )
                })
            }
          </VerticalTimeline>
        </div>
        }
      </article>




    </section>
  )
}

export default Timeline
