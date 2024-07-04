import './Mission.css'

const Mission = () => {
  return (
    <div className='mission-container'>
        <div className='mission-content'>
              <div className='mission-heading'><h1>Our Mission</h1></div>
              <div className="mission-body-text"><h5>Our mission is to provide free, quality education for underprivileged students, emphasizing holistic development. Our curriculum spans academics, life skills, and practical knowledge. We are helping students to tackle the hindrances faced by them which obstructs them to get up to their potential.</h5></div>
        </div>
        <div className='mission-img'>
              <img src="/mission.png" alt="" />
        </div>
    </div>
  )
}

export default Mission
