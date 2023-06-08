import React, { useRef } from 'react';
import Navbar from '../navbar/Navbar';
import './dProjects.css';
import './Projects.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Pict1 from './imgs/home_r.png';
import Pict2 from './imgs/food-r.png';
import Pict3 from './imgs/login-r.png';
import Pict4 from './imgs/menu-r.png'
import Pict5 from './imgs/register-r.png'
import Pict6 from './imgs/cart.png'
import Pict7 from './imgs/intro.png'

function Projects({ isDarkMode, toggleDarkMode }) {
  console.log(isDarkMode);

  const ImageSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const handlePrevSlide = () => {
      sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
      sliderRef.current.slickNext();
    };

    return (
      <div>
        <div className="nav">
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className={isDarkMode ? 'dark-projects' : 'light-projects'}>
          <div className="proj">
            <Slider {...settings} ref={sliderRef}>
              <div>
                <img src={Pict1} alt="Slide 1" />
              </div>
              <div>
                <img src={Pict2} alt="Slide 2" />
              </div>
              <div>
                <img src={Pict3} alt="Slide 3" />
              </div>
              <div>
                <img src={Pict4} alt="Slide 3" />
              </div>
              <div>
                <img src={Pict5} alt="Slide 3" />
              </div>
            </Slider>
            <div className="info">
              <span>Resto App</span>
              <p>ReactJS</p>
            </div>
            <div className="slider-icons">
              <FaChevronLeft className="icon-left" onClick={handlePrevSlide} />
              <FaChevronRight className="icon-right" onClick={handleNextSlide} />
            </div>
          </div>
          <div className="proj">
              <div>
                <img src={Pict7} alt="Slide 1" />
              </div>
            <div className="info">
              <span>Intro section</span>
              <p>HTML CSS JAVASCRIPT</p>
            </div>
          </div>
          <div className="proj">
              <div>
                <img src={Pict6} alt="Slide 1" />
              </div>
            <div className="info">
              <span>Checkout Payment Section</span>
              <p>HTML CSS JAVASCRIPT</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <ImageSlider />;
}

export default Projects;
