import './Program.css'

const Program = () => {
  return (
    <div className='program-container'>
        <div className='p-heading'><h1>PROGRAMS</h1></div>
          <div className='p-box'>
              <div className='program-1'>
                  <div className='box-heading'><h3>Doubt Sessions</h3></div>
                  <div className='box-img'>
                      <div><img src="/p1-box1.png" alt="" /></div>
                      <div><img src="/p1-box12.png" alt="" /></div>
                  </div>
                  <div className='box-text'>At Unnati Welfare Society, we believe in empowering every student with knowledge. After our live classes, we offer dedicated Doubt Sessions to ensure no question goes unanswered. These sessions are designed to support underprivileged students in overcoming challenges and mastering their subjects. Our experienced mentors provide personalized guidance, fostering a nurturing environment where curiosity thrives and learning flourishes. Join us in bridging the digital divide—because every doubt resolved is a step toward a brighter future.</div>
              </div>
              <div className='program-2'>
                  <div className='box-heading'><h3>Live Class & Demonstration</h3></div>
                  <div className='box-img'>
                      <div><img src="/p2-box1.png" alt="" /></div>
                      <div><img src="/p2-box12.png" alt="" /></div>
                      
                  </div>
                  <div className='box-text'>Experience interactive learning like never before with Unnati Welfare Society's Live Classes & Demonstrations! Engage directly with our expert educators who bring subjects to life through real-time demonstrations and engaging discussions. Whether it's exploring new concepts or mastering practical skills, our live sessions provide a dynamic platform for underprivileged students to learn and grow. Join us and discover the power of hands-on learning in transforming education and empowering futures.</div>
              </div>
        </div>
    </div>
  )
}

export default Program
