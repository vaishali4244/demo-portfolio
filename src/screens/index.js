import React, { useEffect, useState } from 'react';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Services from '../components/services/services';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';
import Timeline from '../components/timeline/timeline';
import Testimonial from '../components/testimonial/testimonial';
import ContactForm from '../components/contactForm/contactForm';
import axios from 'axios';

const Screen = () => {
    const [aboutData, setAboutData] = useState([]);
    const [aboutImg, setAboutImg] = useState('');
    const [serviceData, setServiceData] = useState([])
    const [skillsData, setSkillsData] = useState([]);
    const [timelineData, setTimelineData] = useState([])
    const [ testimonialData, setTestimonialData] =useState([])
    const [socialData, setSocialData] = useState([]);
    // const [contactData, setContactData] = useState([]);
    const [search, setSearch] = useState('')


    const url = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
    const handleData = () => {
        axios.get(`${url}`)
            .then(res => {
               
                setAboutData(res?.data?.user?.about)
                setAboutImg(res?.data?.user?.about?.alternateAvatars[0]?.url)
                setServiceData(res?.data?.user?.services)
                setSkillsData(res?.data?.user?.skills)
                setTimelineData(res?.data?.user?.timeline)
                setTestimonialData(res?.data?.user?.testimonials)
                setSocialData(res?.data?.user?.social_handles)

            })
            .catch(err => {
                console.log("error ", err)
            });

    }
    useEffect(() => {
        handleData()
    })


    return (
        <main className='container'>
            <nav className='nav-container'>
                <ul className='nav-content'>
                    <li><a href='#hero'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li className='contact' ><a   href="#contact">Contact</a></li>
                </ul>
            </nav>
            <Hero id="hero" aboutData={aboutData} />
            <About id='about' aboutData={aboutData} aboutImg={aboutImg} />
            <Services id='services' serviceData={serviceData} />
            <Skills skillsData={skillsData} />
            <Projects id='projects'  search={search} setSearch={setSearch} />
            <Timeline  timelineData={timelineData} /> 
            <Testimonial testimonialData={testimonialData} />
            <ContactForm id="contact" aboutData={aboutData} socialData={socialData}  />
        </main>
    )
}

export default Screen;
