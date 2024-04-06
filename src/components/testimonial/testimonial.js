import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = ({ testimonialData, id }) => {

  var settings = {
    dots: true,
  
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <section id={id} className='testimonial-container'>
      <p>Testimonial</p>
      <article className="test-content">
        <Slider {...settings}>
          {testimonialData
            .filter((item) => item?.enabled === true)
            .map(data => {
              return (

                <div key={data?._id} className="test-card" >
                  <img src={data?.image?.url} className="pro-img2" />
                  <div className="card-body ">
                    <h4 className="card-font3">{data?.name}</h4>
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
