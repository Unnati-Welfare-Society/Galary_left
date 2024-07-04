import React from 'react';
import './Joinus.css';

const JoinUs = () => {
  return (
    <div>
      <div className="form-page">
        <h1 className="form-title">JOIN US!</h1>

        <div className="form-container">
          <div className="form-wrapper">
            <form action="https://docs.google.com/forms/d/YOUR_GOOGLE_FORM_ID/formResponse" method="post" target="_blank">
              <h2>Membership Form</h2>
              <label htmlFor="membershipName1">Name:</label>
              <input type="text" id="membershipName1" name="entry.YOUR_FIELD_ID_NAME" required />

              <label htmlFor="membershipPlace1">Place:</label>
              <input type="text" id="membershipPlace1" name="entry.YOUR_FIELD_ID_PLACE" required />

              <label htmlFor="membershipEmail1">Email:</label>
              <input type="email" id="membershipEmail1" name="entry.YOUR_FIELD_ID_EMAIL" required />

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="form-wrapper">
            <form action="https://docs.google.com/forms/d/YOUR_GOOGLE_FORM_ID/formResponse" method="post" target="_blank">
              <h2>Donation Form</h2>
              <label htmlFor="donationName2">Name:</label>
              <input type="text" id="donationName2" name="entry.YOUR_FIELD_ID_NAME" required />

              <label htmlFor="donationPlace2">Place:</label>
              <input type="text" id="donationPlace2" name="entry.YOUR_FIELD_ID_PLACE" required />

              <label htmlFor="donationEmail2">Email:</label>
              <input type="email" id="donationEmail2" name="entry.YOUR_FIELD_ID_EMAIL" required />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
