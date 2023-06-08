import React from 'react'
import Navbar from '../navbar/Navbar'
import './About.css'
import './dAbout.css'
import pict from './imgs/Me.png'
import {HiOutlineDownload} from 'react-icons/hi'


function About({isDarkMode , toggleDarkMode}) {
  console.log(isDarkMode);
  return (
    <div>
      <div className="nav">
        <Navbar  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className={isDarkMode ? "dark-about" : "light-about"}>
        <div className="header">
          <span>About me</span>
          <p>My introduction</p>
        </div>
        <div className="info">
          <div className="pict-cv">
            <div className="img">
              <img src={pict} />
            </div>
            <div className="cv">
              <a href="#">
                Download CV &nbsp;
                <HiOutlineDownload />
              </a>
            </div>
          </div>
          
          <div className="about">
          <p>
            Hi there! My name is Mohamed Elamarty, and I'm a full-stack developer with years of experience building websites and applications.I specialize in front-end and back-end development using various programming languages such as JavaScript, HTML, CSS, and Node.js. In addition, I have expertise in the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. I also possess skills in UI/UX design, allowing me to create intuitive and visually appealing user interfaces for web applications. With my diverse skill set and experience in the field, I am confident in my ability to develop high-quality web applications that meet client needs and exceed expectations.

            I love what I do, and I'm always excited to learn new technologies and explore new challenges in web development. My approach is to bring curiosity, creativity, and attention to detail to every project I work on, whether it's a personal project or a team effort.

            I believe in the power of technology to make a difference, and I'm passionate about creating meaningful experiences that make people's lives easier and more enjoyable. When I'm not coding, I enjoy fishing, coding, and playing chess, which help me stay balanced and inspired.

            If you're interested in collaborating on a project or just want to chat about web development, I'd love to hear from you. Thanks for visiting my site!
          </p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default About