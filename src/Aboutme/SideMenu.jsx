import React from 'react'
import '../App2.css'
import NamaAnimation from '../Navbar/NameAnimation'
import heriimage from '../asserts/heroimage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from 'react'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import resume from '../Aboutme/resume.pdf'
export default function SideMenu() {
  const [theme, setTheme] = useState('light-theme');
  const [icon, iconchange] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  const chnageTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
    iconchange(!icon)
  };
  return (
    <>
      <div className='side-menu-header'>
        <div className='top-bars'>
          <a href='#about'>About</a>
          <a href='#certification'>Certification</a>
          <a href='#work'>Work</a>
          <a href='#contact'>Contact</a>
          {
            icon ? (<FontAwesomeIcon icon={faMoon} className='dark-icon' onClick={chnageTheme} />
            ) : (<FontAwesomeIcon icon={faSun} className='dark-icon' onClick={chnageTheme} />)
          }
        </div>
        <div className='Side-menu'>


          <img src={heriimage} className='user-image' />
          <h2>Vengataraman S</h2>
          <NamaAnimation />
          <div className='line'></div>
          <div className='social-icons'>
            <a href="https://www.linkedin.com/in/vengataraman-s-6293a921b/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className='social-icons2' />
            </a>
            <a href="https://www.instagram.com/raghuxram_" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='social-icons1' />
            </a>

            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className='social-icons3' />
            </a>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className='social-icons4' />
            </a>
          </div>
          <a href={resume} download>   <button className='read-more' type='button'>Download CV </button>
          </a>


          {/* <div className="contact-container">
            <p>Email: abc@example.com</p>
            <p>Phone: 0987673</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">username</a></p>
            <p>Languages: English, Spanish, French</p>
            <p>GitHub: <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">github.com/username</a></p>
        </div>  */}



        </div>
      </div>
    </>

  )
}
