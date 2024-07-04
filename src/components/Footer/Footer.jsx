
import './Footer.css'
const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer-contact">
              <div className="f-img"><img src="uwsHDlogo.jpg" alt="logo" /></div>
              
        {/* contact-email-phone */}
        <div className="f-contactus">
                  <div className="f-contactus-title"><h2>Contact Us:-</h2></div>
                  <div className="contactus-text-ph">
                      <a href="tel:+919839869063">
                          <div className="ph-img"><img src="call.svg" alt="call-icon" /></div>
                          <div className="ph-text"><p>+91 9839869063</p></div>
                      </a>

                  </div>
                  <div className="contactus-text-email">
                        <a href="mailto:info.unnatisociety@gmail.com">
                            <div className="gm-img"><img src="gmail.svg" alt="gmail-logo" /></div>
                            <div className="gm-text"><p>info.unnatisociety@gmail.com</p></div>
                        </a>
                  </div>
        </div>
        
          {/* social-section */}

              <div className="f-social">
                  <h2>Follow Us:-</h2>
                  <div className="social-link">
                      <div className='yt-img'><img src="youtube-svgrepo-com.svg" alt="yt-logo" /></div>
                      <div className='social-txt'><a href="#"><p>Youtube</p></a></div>
                  </div>
                  <div className="social-link">
                      <div className='li-img'><img src="linkedin-svgrepo-com.svg" alt="li-logo" /></div>
                      <div className='social-txt'><a href="https://www.linkedin.com/company/unnati-welfare-society/"><p>LinkedIn</p></a></div>
                  </div>
                  <div className="social-link">
                      <div className='in-img'><img src="instagram-svgrepo-com.svg" alt="in-logo" /></div>
                      <div className='social-txt'><a href="https://www.instagram.com/unnati_welfare_society?igsh=YjFvc25jdm5sZ2Vk"><p>Instagram</p></a></div>
                  </div>
                  <div className="social-link">
                      <div className='fb-img'><img src="facebook-svgrepo-com.svg" alt="fb-logo" /></div>
                      <div className='social-txt'><a href="https://www.facebook.com/profile.php?"><p>Facebook</p></a></div>
                  </div>
              </div>

        



        {/* newsletter */}
              <div className="f-newslater">
                  <h2>Subscribe to Our <br/>News Letter:-</h2>
                  <form>
                        <label htmlFor="email"></label>
                      <input type="text" id="email" placeholder="email" />
                      
                </form>

              </div>
        </div>
          <div className="footer-copyright">
                <p> <b>Copyright © 2024 UNNATI WELFARE SOCIETY. All Rights Reserved<br />Build & Maintained by Unnati Welfare Society</b></p>

          </div>
    </footer>
  )
}

export default Footer
