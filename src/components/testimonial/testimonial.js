import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./testimonial.css";

const Testimonial = ({ testimonialData }) => {
 let settings = {
    dots: true,

    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonial-container">
      <h3 className="about-heading">Testimonials</h3>
      <article className="test-content ">
        <Slider {...settings}>
          {testimonialData
            .filter((item) => item?.enabled === true)
            .map((data) => {
              return (
                <div
                  key={data?._id}
                  className="test-card"
                  style={{ width: "35vw" }}
                >
                  <div className="card-content">
                    <div className="test-body ">
                      <img
                        className="skills-img"
                        src={data?.image?.url}
                        alt="testimonial"
                      />
                      <h6 className="job-title">{data?.name}</h6>
                    </div>
                    <p>{data?.position}</p>
                    <p>"{data?.review}"</p>
                  </div>
                </div>
              );
            })}
        </Slider>
      </article>
      <article className="test-content-mini">
        {testimonialData
          .filter((item) => item?.enabled === true)
          .map((data) => {
            return (
              <div
                key={data?._id}
                className="test-card"
                style={{ width: "35vw" }}
              >
                <div className="card-content">
                  <div className="test-body ">
                    <img
                      className="skills-img"
                      src={data?.image?.url}
                      alt="testimonial"
                    />
                    <h6 className="job-title">{data?.name}</h6>
                  </div>
                  <p>{data?.position}</p>
                  <p>"{data?.review}"</p>
                </div>
              </div>
            );
          })}
      </article>
    </section>
  );
};

export default Testimonial;
