

import React from 'react'
import { SectionButton, SectionTitle, TestimonialCard } from '../components';
//slick js 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
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
    <section className="py-20 bg-gray-100">
      <div className="container">
        
        <div className="mb-8 flex flex-col md:flex-row items-start justify-between md:items-end font-roboto-con">
          <SectionTitle subtitle="testimonial" title_1="people say" title_2="about our works"/>
          <SectionButton content="view all members" link="#"/>
        </div>

        <div className='px-2'>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map((el, index) => {
              return <TestimonialCard key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials