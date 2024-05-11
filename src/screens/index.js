import React, { useEffect, useState } from "react";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Services from "../components/services/services";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";
import Timeline from "../components/timeline/timeline";
import Testimonial from "../components/testimonial/testimonial";
import ContactForm from "../components/contactForm/contactForm";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import { throttle } from "lodash";
import { useLocation } from "react-router-dom";

const Screen = () => {
  const [aboutData, setAboutData] = useState([]);
  const [aboutImg, setAboutImg] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [socialData, setSocialData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  const location = useLocation();

  useEffect(() => {
    const mouseMoveFunc = throttle((e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }, 16);
    window.addEventListener("mousemove", mouseMoveFunc);

    return () => {
      window.removeEventListener("mousemove", mouseMoveFunc);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      // height: 50,
      // width: 50,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => {
    setCursorVariant("default");
  };

  const url = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`;
  const handleData = () => {
    axios
      .get(`${url}`)
      .then((res) => {
        setAboutData(res?.data?.user?.about);
        setAboutImg(res?.data?.user?.about?.alternateAvatars[0]?.url);
        setServiceData(res?.data?.user?.services);
        setSkillsData(res?.data?.user?.skills);
        setTimelineData(res?.data?.user?.timeline);
        setTestimonialData(res?.data?.user?.testimonials);
        setSocialData(res?.data?.user?.social_handles);
      })
      .catch((err) => {
        console.log("error ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handleData();
  });

  return (
    <main
      className="container"
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      {loading ? (
        <div className="loader-container">
          <PulseLoader color="#007bff" size={15} margin={5} />
        </div>
      ) : (
        <>
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
            className="nav-container"
          >
            <motion.ul
              className="nav-content"
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0,
                delay: 1.2,
                type: "spring",
                stiffness: 200,
              }}
            >
              <motion.li
                whileHover={{
                  scale: 1.08,
                  textShadow: "0 0 8px white ",
                }}
              >
                <a href="#home">Home</a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.08,
                  textShadow: "0 0 8px white ",
                }}
              >
                <a href="#about">About</a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.08,
                  textShadow: "0 0 8px white ",
                }}
              >
                <a href="#services">Services</a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.08,
                  textShadow: "0 0 8px white ",
                }}
              >
                <a href="#projects">Projects</a>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.08,
                  textShadow: "0 0 8px white ",
                }}
                className="contact"
              >
                <a href="#contact">Contact</a>
              </motion.li>
            </motion.ul>
          </motion.nav>
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          ></motion.div>

          <Hero id="home" aboutData={aboutData} />
          <AnimatePresence mode="wait">
            <About
              id="about"
              aboutData={aboutData}
              aboutImg={aboutImg}
              location={location}
              key={location.key}
            />
          </AnimatePresence>
          <Services id="services" serviceData={serviceData} />
          <Skills skillsData={skillsData} />
          <Projects id="projects" search={search} setSearch={setSearch} />
          <Timeline
            timelineData={timelineData}
            workIcon={
              <img
                className="work-icon"
                src={require("../assets/images/suitcase.png")}
                alt="work"
              />
            }
            eduIcon={
              <img
                className="work-icon"
                src={require("../assets/images/book.png")}
                alt="education"
              />
            }
          />
          <Testimonial testimonialData={testimonialData} />
          <ContactForm
            id="contact"
            aboutData={aboutData}
            socialData={socialData}
          />
        </>
      )}
    </main>
  );
};

export default Screen;
