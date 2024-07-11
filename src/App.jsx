// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage' ;
import PeoplePage from './components/PeoplePage/PeoplePage';
import GalaryPage from './components/GalaryPage/GalaryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/galary" element={<GalaryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
