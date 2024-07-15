import React, { useState } from 'react';
import './Galary.css';

const Galary = () => {
  const [popupImage, setPopupImage] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleCardClick = (src) => {
    setPopupImage(src);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupImage('');
  };

  return (
    <div className='g-page'>
      <h1 className="hea"><strong>GALLERY</strong></h1>
      <h2 className="hea">UNNATI SAMAROH</h2>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('samaroh .JPG')}>
          <img src="samaroh .JPG" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('samaroh 2.JPG')}>
          <img src="samaroh 2.JPG" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('samaroh6.JPG')}>
          <img src="samaroh6.JPG" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('samaroh5.JPG')}>
          <img src="samaroh5.JPG" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('samaroh4.JPG')}>
          <img src="samaroh4.JPG" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('samaroh7.JPG')}>
          <img src="samaroh7.JPG" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('unnati team 1.jpeg')}>
          <img src="unnati team 1.jpeg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('samaroh-3.jpeg')}>
          <img src="samaroh-3.jpeg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('unnati team 2.jpeg')}>
          <img src="unnati team 2.jpeg" alt="man" />
        </div>
      </div>
      <h2 className="hea">JOURNEY START...</h2>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('new beginning 2.jpg')}>
          <img src="new beginning 2.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('new beginning.jpg')}>
          <img src="new beginning.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('startting day.jpeg')}>
          <img src="startting day.jpeg" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('startting day 2.jpeg')}>
          <img src="startting day 2.jpeg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('team.jpeg')}>
          <img src="team.jpeg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('team 2.jpeg')}>
          <img src="team 2.jpeg" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('class2.jpeg')}>
          <img src="class2.jpeg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('class 3.jpeg')}>
          <img src="class 3.jpeg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('class4.jpg')}>
          <img src="class4.jpg" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('class5.jpg')}>
          <img src="class5.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('class6.jpg')}>
          <img src="class6.jpg" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('class7.jpg')}>
          <img src="class7.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('class8.jpg')}>
          <img src="class8.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('class9.jpg')}>
          <img src="class9.jpg" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('class10.jpg')}>
          <img src="class10.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('class11.jpg')}>
          <img src="class11.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('class12.jpeg')}>
          <img src="class12.jpeg" alt="man" />
        </div>
      </div>
      <h2 className="hea">TEAM MEETING</h2>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('meeting2.jpg')}>
          <img src="meeting2.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('meeting1.jpg')}>
          <img src="meeting1.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('meeting3.jpg')}>
          <img src="meeting3.jpg" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('meeting4.jpg')}>
          <img src="meeting4.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('meeting5.jpg')}>
          <img src="meeting5.jpg" alt="man" />
        </div>
      </div>
      <h2 className="hea">TEST AND PRIZE DISTRIBUTION</h2>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('test1.jpg')}>
          <img src="test1.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('test2.jpg')}>
          <img src="test2.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('prize1.jpg')}>
          <img src="prize1.jpg" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('prize4.jpeg')}>
          <img src="prize4.jpeg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('prize2.jpg')}>
          <img src="prize2.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('prize3.jpg')}>
          <img src="prize3.jpg" alt="man" />
        </div>
      </div>
      <div className="container">
        <div className="g-card" onClick={() => handleCardClick('prize7.jpg')}>
          <img src="prize7.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('prize6.jpg')}>
          <img src="prize6.jpg" alt="man" />
        </div>
        <div className="g-card" onClick={() => handleCardClick('prize8.jpg')}>
          <img src="prize8.jpg" alt="man" />
        </div>
      </div>
      <h2 className="hea">AND CONTINUE...</h2>

      {isPopupVisible && (
        <div className="popup" onClick={closePopup}>
          <span className="close" onClick={closePopup}>&times;</span>
          <img className="popup-content" src={popupImage} alt="Popup" />
        </div>
      )}
    </div>
  );
};

export default Galary;
