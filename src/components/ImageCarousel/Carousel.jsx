// src/ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const slides = [
    { image: 'IrfanRaj.jpg', text: 'Caption for Image 1' },
    { image: 'IrfanRaj.jpg', text: 'Caption for Image 2' },
    { image: 'IrfanRaj.jpg', text: 'Caption for Image 3' },
    { image: 'IrfanRaj.jpg', text: 'Caption for Image 4' },
    { image: 'IrfanRaj.jpg', text: 'Caption for Image 5' },
    { image: 'IrfanRaj.jpg', text: 'Caption for Image 6' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
