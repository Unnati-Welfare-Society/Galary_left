// src/components/MainPage/MainPage.jsx
import { Element } from 'react-scroll';
import Hero from "../HeroSection/Hero.jsx";
import Nav from "../NavBar/Nav.jsx";
import Home from "../Home/Home.jsx";
import Vision from "../Vision/Vision.jsx";
import Mission from "../Mission/Mission.jsx";
import Program from "../Programs/Program.jsx";
import Counter from "../Impact/Impact.jsx";
import Footer from "../Footer/Footer.jsx";
import Joinus from '../JoinUS/Joinus.jsx';

const MainPage = () => {
  return (
    <>
      <Element name="hero" id="hero"><Hero /></Element>
      <Nav />
      <Element name="home" id="home"><Home /></Element>
      <Element name="vision" id="vision"><Vision /></Element>
      <Element name="mission" id="mission"><Mission /></Element>
      <Element name="program" id="program"><Program /></Element>
      <Element name="joinus" id="joinus"><Joinus /></Element>
      <Element name="counter" id="counter"><Counter /></Element>
      <Element name="footer" id="footer"><Footer /></Element>
    </>
  );
};

export default MainPage;
