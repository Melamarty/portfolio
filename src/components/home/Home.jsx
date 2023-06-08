import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import './Home.css'
import './dHome.css'
import img from './img/img.jpg'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaRegPaperPlane} from 'react-icons/fa'

function Home({isDarkMode , toggleDarkMode}) {
  console.log(isDarkMode);
  return (
    <div>
      <div >
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className={isDarkMode ? "darkhome" : "lighthome"}>
          <div className="txt">
            <span>Hi I'm</span>
            <p>Mohamed elamarty</p>
            full-stack developer with a passion for creating beautiful, functional websites and applications. With years of experience in front-end and back-end development, I'm confident in my ability to bring your ideas to life. Take a look around to see some of my past projects and get a sense of my style. If you're interested in working together, don't hesitate to get in touch.
            <div className="accounts">
              <a href="https://github.com/simofront"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/mohamed-elamarty-157472231/"><AiFillLinkedin /></a>           
            </div>
            <div className="contactme">
              <Link to="/contactme">
                <button>
                  Contact me
                  <FaRegPaperPlane className='ic' />
                </button>
              </Link>
            </div>
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home