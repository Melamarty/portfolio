import React from 'react'
import Navbar from '../navbar/Navbar'
import './dSkills.css'
import './Skills.css'
//imgs
import html from './imgs/html-5.png'
import css from './imgs/css-3.png'
import js from './imgs/js.png'
import react from './imgs/react.png'
import php from './imgs/php.png'
import nodejs from './imgs/nodejs.png'
import mongodb from './imgs/mongodb.png'
import mysql from './imgs/mysqll.png'



function Skills({isDarkMode , toggleDarkMode}) {
  return (
    <div>
      <div>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className={isDarkMode ? "dark-skills" : "skills"}>
        <div className="skill">
          <div className="header">
            Front End
          </div>
          <div className="content">
            <div className="skl">
              <img src={html} alt="HTML" />
              <p>Html</p>
            </div>
            <div className="skl">
              <img src={css} alt="skill" />
              <p>Css</p>
            </div>
            <div className="skl">
              <img src={js} alt="skill" />
              <p>JavScript</p>
            </div>
            <div className="skl">
              <img src={react} alt="skill" />
              <p>ReactJS</p>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="header">
            Back End
          </div>
          <div className="content">
            <div className="skl">
              <img src={nodejs} alt="HTML" />
              <p>NodeJS</p>
            </div>
            <div className="skl">
              <img src={mongodb} alt="skill" />
              <p>MongoDB</p>
            </div>
            <div className="skl">
              <img src={php} alt="skill" />
              <p>PHP</p>
            </div>
            <div className="skl">
              <img src={mysql} alt="skill" />
              <p>Mysql</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills