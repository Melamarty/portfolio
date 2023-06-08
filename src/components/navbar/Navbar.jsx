import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import {MdOutlineDarkMode} from 'react-icons/md'
import {FiSun} from 'react-icons/fi'
import './Nav.css'
import "./Navd.css"


function Navbar({isDarkMode , toggleDarkMode}) {
  return (
    <div className={!isDarkMode ? "nav light-nav" : "nav dark-nav"}>
        <div className="links">
            <div className="link">
                <NavLink to="/" activeClassName="active" className="nav-page">
                    Home
                </NavLink>
            </div>
            <div className="link">
                <NavLink to="/about" activeClassName="active" className="nav-page">
                    About
                </NavLink>
            </div>
            <div className="link">
                <NavLink to="/skills" activeClassName="active" className="nav-page">
                    Skills
                </NavLink>
            </div>
            <div className="link">
                <NavLink to="/projects" activeClassName="active" className="nav-page">
                    Projects
                </NavLink>
            </div>
            <div className="link">
                <NavLink to="/contact" activeClassName="active" className="nav-page">
                    Contactme
                </NavLink>
            </div>
            <div className="switch-mode" onClick={toggleDarkMode}>
            <FiSun className={isDarkMode ? "" : "hide"} />
            <MdOutlineDarkMode className={!isDarkMode ? "" : "hide"} />
            </div>
        </div>
    </div>
  )
}

export default Navbar