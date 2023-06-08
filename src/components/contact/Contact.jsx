import React from 'react'
import Navbar from '../navbar/Navbar'
import './Contact.css'
import './dContact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'

function Contact({isDarkMode , toggleDarkMode}) {
  return (
    <div>
      <div className="nav">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      </div>
      <div className={isDarkMode ? "dark-contact" : "light-contact"}>
        <div className="txt">
          <span>Let's chat </span> <br />
          <span>Tell about your project</span>
        </div>
        <div className='socials'>
          <div className="email">
            <span>Mail me at</span> <br />
            <HiOutlineMail />
            <a href="mailto:mohamedelamarty03@gmail.com">mohamedelamarty03@gmail.com</a>
            
          </div>
          <div className="linkdin">
            <span>or contact me at</span><br />
            <BsLinkedin /><a href="https://www.linkedin.com/in/mohamed-elamarty-157472231/">Mohamed Elamarty</a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact