
import "./People.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function People () {
  return(
    <main>
  <div className="text-center p-3"><h1>OUR PEOPLE</h1></div>
  <div className="founder mx-3 bg-light">
    <div className="p-3 mx-3"><h2>Founders</h2></div>
    <div className="member mt-3 mx-3">
    <div className="card m-3">
            <img src="../../../Dheeraj.jpeg" className="card-img-top" alt="Co-founder" />
            <div className="card-body">
              <h5 className="card-title">Dheeraj Yadav</h5>
              <p className="card-text mt-3">Founder & Program Manager</p>
            </div>
      </div>
    <div className="thought">
            <div><h4>Founder's Desk</h4></div>
            <div className="mt-3">
              <p>
                Welcome to UWS. We believe in the transformative power of education to change lives. Our mission is to bridge the digital divide and empower underprivileged students through technology and knowledge, fostering a brighter future for all.
              </p>
            </div>
          </div>
    </div>
    <div className="member mt-3 mx-3">
    <div className="thought">
            <div><h4>Founder's Desk</h4></div>
            <div className="mt-3">
              <p>
                "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                <br/>— Malcolm X <br/><br/>
                "Our mission at UWS is to empower underprivileged students through technology and education, ensuring equal access and opportunities for a brighter future. Together, we strive to eliminate barriers and foster a community where every child can thrive and succeed."
              </p>
            </div>
          </div>
          <div className="card">
            <img src="../../../Divyanshu.jpg" className="card-img-top" alt="Co-founder" />
            <div className="card-body">
              <h5 className="card-title">Divyanshu Pal</h5>
              <p className="card-text mt-3">Founder & PR Manager</p>
            </div>
      </div>
    </div>
  </div>
  <div className="text-center m-3"><h2>Our Teams</h2></div>
  <div className="group group-1 m-3 p-3 bg-light">
    <div className="finance mt-3">
      <div className="text-center"><h4>Finance And Fundraising Team</h4></div>
      <div className="animesh mx-4">
        <div className="card">
          <img src="../../../Animesh.jpg" className="card-img-top" alt="Finance-team" />
          <div className="card-body">
            <h5 className="card-title">Animesh Mishra</h5>
            <p className="card-text mt-3">Financial & Fundraising Manager</p>
          </div>
        </div>
      </div>
    </div>
    <div className="line pt-3"></div>
    <div className="PR-team mt-3">
      <div className="text-center"><h4>Public Relation Team</h4></div>
      <div className="PR-member mx-4">
        <div className="card">
          <img src="../../../AkankshaKumari.jpg" className="card-img-top" alt="PR-team" />
          <div className="card-body">
            <h5 className="card-title">Akanksha Kumari</h5>
            <p className="card-text mt-3">PR Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="group group-2 m-3 bg-light">
    <div className="text-center pt-3"><h4>Ground Management Team</h4></div>
    <div className="ground m-3">
      <div className="card">
        <img src="../../../Bhivanshu.jpg" className="card-img-top" alt="Ground-team" />
        <div className="card-body">
          <h5 className="card-title">Bhivanshu Lawaniya</h5>
          <p className="card-text mt-3">Ground Services Manager</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../Anand.jpg" className="card-img-top" alt="Ground-team" />
        <div className="card-body">
          <h5 className="card-title">Anand Kumar Shukla</h5>
          <p className="card-text mt-3">Ground Services Coordinator</p>
        </div>
      </div>
    </div>
  </div>
  <div className="group group-3 m-3 bg-light">
    <div className="text-center pt-3"><h4>Academics & Curriculum Designer Team</h4></div>
    <div className="academic mt-3">
      <div className="card">
        <img src="../../../Akash.jpg" className="card-img-top" alt="Academic-team" />
        <div className="card-body">
          <h5 className="card-title">Akash Sharma</h5>
          <p className="card-text mt-3">Academic Manager</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../OsitaBharti.jpg" className="card-img-top" alt="Academic-team" />
        <div className="card-body">
          <h5 className="card-title">Osita Bharti</h5>
          <p className="card-text mt-3">Academic Coordinator</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../Anand.jpg" className="card-img-top" alt="Academic-team" />
        <div className="card-body">
          <h5 className="card-title">Meghram Meena</h5>
          <p className="card-text mt-3">Academic Coordinator</p>
        </div>
      </div>
    </div>
  </div>
  <div className="group group-4 m-3 bg-light">
      <div className="text-center pt-3"><h4>Social Media Team</h4></div>
      <div className="social mt-3">
        <div className="card">
          <img src="../../../AyushKumar.jpg" className="card-img-top" alt="Media-team" />
          <div className="card-body">
            <h5 className="card-title">Ayush Kumar Gautama</h5>
            <p className="card-text mt-3">Social Media Manager</p>
          </div>
        </div>
        <div className="card">
          <img src="../../../ShivamGautam.jpg" className="card-img-top" alt="Media-team" />
          <div className="card-body">
            <h5 className="card-title">Shivam Gautama</h5>
            <p className="card-text mt-3">Social Media Coordinator</p>
          </div>
        </div>
      </div>
  </div>
  <div className="group group-5 m-3 bg-light">
    <div className="text-center pt-3"><h4>Technical Team</h4></div>
    <div className="tech mt-3">
      <div className="card">
        <img src="../../../IrfanRaj.jpg" className="card-img-top" alt="Tech-team" />
        <div className="card-body">
          <h5 className="card-title">Md Irfan Raj</h5>
          <p className="card-text mt-3">Technical Team Manager</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../Shreyanshi.jpg" className="card-img-top" alt="Tech-team" />
        <div className="card-body">
          <h5 className="card-title">Shreyanshi Srivastava</h5>
          <p className="card-text mt-3">Technical Team Coordinator</p>
        </div>
      </div>
    </div>
  </div>
  <div className="group-6 m-3 bg-light">
    <div className="text-center pt-3"><h2>Our Pride Members</h2></div>
    <div className="pride mt-2">
      <div className="card">
        <img src="../../../Bhivanshu.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Adarsh Srivastava</h5>
          <p className="card-text mt-3">Ground Team Lead</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../Keshav.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Keshav Kumar Jha</h5>
          <p className="card-text mt-3">Ground Team Lead</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../RitikBhardwaj.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Ritik Bhardwaj</h5>
          <p className="card-text mt-3">Academic Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../Devanshu.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Devanshu Singh</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
    </div>
    <div className="pride mt-2">
      <div className="card">
        <img src="../../../SoumyaRai.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Saumya Rai</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../AdityaJohari.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Aditya Johari</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../SrishtiPriya.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Srishti Priya</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../Anand.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Akhil Vikram Singh</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
    </div>
    <div className="pride mt-2">
      <div className="card">
        <img src="../../../SatyamSingh.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Satyam Singh</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../SidhharthShukla.jpg"className="card-img-top"alt="Pride-members"/>
        <div className="card-body">
          <h5 className="card-title">Sidhharth Shukla</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../Anamika.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Anamika Yadav</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../ArnavKumar.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Arnav Kumar</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
    </div>
    <div className="pride mt-2">
      <div className="card">
        <img src="../../../ShivaSeth.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Shiva Seth</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../PriyadarshanSatyam.jpeg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Priyadarshan Satyam</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../SonuKumar.jpg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Sonu Kumar</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
      <div className="card">
        <img src="../../../Raushan.jpeg" className="card-img-top" alt="Pride-members" />
        <div className="card-body">
          <h5 className="card-title">Raushan Kumar</h5>
          <p className="card-text mt-3">Ground Team Member</p>
        </div>
      </div>
    </div>
  </div>
</main>
);
}

export default People
