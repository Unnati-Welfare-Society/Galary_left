import React, { useEffect, useState } from 'react';
import './Impact.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from '../ImageCarousel/Carousel'; // import the ImageCarousel component


const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; // duration in milliseconds
    const increment = end / (duration / 50); // increment value based on duration and desired end value

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.ceil(start));
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="counter">
      <h1>{count}+</h1>
      <p>{label}</p>
    </div>
  );
};



const CounterSection = () => {
  return (
      <div className="i-body">
          <div className='i-heading'><h1>IMPACT</h1></div>
          <div className='counter-section'>
                <Counter end={10} label="Villages Reached" />
                <Counter end={10} label="Schools Reached" />
                <Counter end={1000} label="Students Reached" />
          </div>
          <div className="testimonial">
              <ImageCarousel />
          </div>
      
    </div>
  );
};

export default CounterSection;
