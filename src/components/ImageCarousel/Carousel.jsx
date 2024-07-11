// src/ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const slides = [
    { image: 'lamp_ingite1.JPG', text: 'Caption for Image 1' },
    { image: 'lamp_ignite2.JPG', text: 'Caption for Image 2' },
    { image: 'lamp_ignite3.JPG', text: 'Caption for Image 3' },
    { image: 'shawl_giving.JPG', text: 'Caption for Image 4' },
    { image: 'plant_giving.JPG', text: 'Caption for Image 5' },
    { image: 'yogaday.jpg', text: 'Caption for Image 6' },
    { image: 'world_child_labour_day.jpg', text: 'Caption for Image 7' },
    { image: 'help_us.jpg', text: 'Caption for Image 7' },
    { image: 'dyk.jpg', text: 'Caption for Image 7' },
    { image: 'wfsd.jpg', text: 'Caption for Image 7' },
    { image: 'PPS.jpg', text: 'Caption for Image 7' },
    { image: 'motherday.jpg', text: 'Caption for Image 7' }
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // laptops
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, // mobile phones
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-container">
            <div className="image-container">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
            <p className="image-text">{slide.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
