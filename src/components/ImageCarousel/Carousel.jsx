// src/ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const slides = [
    { image: 'lamp_ingite1.JPG', text: 'lamp lighting ceremony by BEO,SABOUR,BHAGALPUR,BIHAR' },
    { image: 'lamp_ignite2.JPG', text: 'lamp lighting by Coordinator IIITBH' },
    { image: 'lamp_ignite3.JPG', text: 'DR.Dheeraj ' },
    { image: 'shawl_giving.JPG', text: 'Honoring our esteemed chief guest with a shawl, symbolizing our deep respect and gratitude' },
    { image: 'plant_giving.JPG', text: 'Presenting a plant to our honored chief guest, symbolizing growth, sustainability, and our heartfelt appreciation for her presence' },
    { image: 'yogaday.jpg', text: 'Yoga Day 2024' },
    { image: 'world_child_labour_day.jpg', text: 'campaign againts child labour' },
    { image: 'help_us.jpg', text: 'Join Us' },
    { image: 'dyk.jpg', text: 'campaign' },
    { image: 'wfsd.jpg', text: 'campaign.' },
    { image: 'PPS.jpg', text: 'campaign.' },
    { image: 'motherday.jpg', text: 'Happy Mothers Day' }
    
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
