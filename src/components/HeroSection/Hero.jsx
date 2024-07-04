// import  { useEffect } from 'react';
import './Hero.css';
import useScrollToSection from '../../hooks/useScrollToSection';

const Hero = () => {
  // useEffect(() => {
  //   const bubbleContainer = document.querySelector('.bubble-container');

  //   if (bubbleContainer) {
  //     for (let i = 0; i < 20; i++) {
  //       const bubble = document.createElement('div');
  //       bubble.classList.add('bubble');
  //       bubble.style.left = `${Math.random() * 100}%`;
  //       bubble.style.animationDelay = `${Math.random() * 10}s`;
  //       bubble.style.animationDuration = `${10 + Math.random() * 10}s`;
  //       bubbleContainer.appendChild(bubble);
  //     }
  //   }
  // }, []);
  const scrollToSection = useScrollToSection();

  return (
    <div className="banner">
      {/* <div className="twinkling"></div> */}
      <div className="logo">
        <img src="/Unnati.svg" alt="logo" />
      </div>
      {/* <div className="vertical-line"></div> */}
      <div className="text">
        <h1>Unnati Welfare Society</h1>
        <h3>Revolutionizing Present, Transforming Future</h3>
      </div>
      <div className="donate-container">
        
        <button className="donate-button" onClick={() => scrollToSection('joinus')} >Donate Now</button>
      </div>
      {/* <div className="bubble-container"></div> */}
    </div>
  );
};

export default Hero;
