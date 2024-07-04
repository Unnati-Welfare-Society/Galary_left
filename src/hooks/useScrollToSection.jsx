// src/hooks/useScrollToSection.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useScrollToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleNavigation = (section) => {
    if (location.pathname !== '/') {
      navigate(`/#${section}`);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return handleNavigation;
};

export default useScrollToSection;
