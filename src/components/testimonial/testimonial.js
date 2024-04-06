import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './testimonial.css';

const Testimonial = ({ testimonialData }) => {

  var settings = {
    dots: true,
  
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='testimonial-container'>
      <h3 className='about-heading'>Testimonial</h3>
      <article className="test-content">
        <Slider {...settings}>
          {testimonialData
            .filter((item) => item?.enabled === true)
            .map(data => {
              return (

                <div key={data?._id} className="test-card" >
                  <img  className='skills-img' src={data?.image?.url} alt='testimonial'/>
                  <div className="test-body ">
                    <h4 className="job-title">{data?.name}</h4>
                    <p>{data?.position}</p>
                    <p>{data?.review}</p>
                  </div>
                </div>
              )
            })}
            </Slider>
      </article>
    </section>
  )
}

export default Testimonial
