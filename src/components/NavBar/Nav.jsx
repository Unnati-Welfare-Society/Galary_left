import { Link as RouterLink } from 'react-router-dom';
import useScrollToSection from '../../hooks/useScrollToSection';
import './Nav.css';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Nav = () => {
  const scrollToSection = useScrollToSection();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="menu-container">
      <button onClick={() => scrollToSection('hero')}>Home</button>

      <div className="dropdown">
        <button onClick={toggleDropdown}>
          About Us <FaCaretDown />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <button onClick={() => scrollToSection('vision')}>Vision</button>
            <button onClick={() => scrollToSection('mission')}>Mission</button>
          </div>
        )}
      </div>

      <button onClick={() => scrollToSection('program')}>Programs</button>
      <RouterLink to="/people" style={{ textDecoration: 'none' }}>
        <button>People</button>
      </RouterLink>
      <RouterLink to="/galary" style={{ textDecoration: 'none' }}>
        <button>Galary</button>
      </RouterLink>
      <button onClick={() => scrollToSection('counter')}>Impact</button>
      <button onClick={() => scrollToSection('joinus')}>Join Us</button>
      <button onClick={() => scrollToSection('footer')}>Contact Us</button>
    </nav>
  );
};

export default Nav;
