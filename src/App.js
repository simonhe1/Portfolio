import React, { useState, useEffect } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import MenuToggler from './MenuToggler';
import NavBar from './NavBar';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import AOS from 'aos';

const App = () => {
  const[menuToggled,setMenuToggled] = useState(false)

  const toggleMenu = () => {
    const toggled = !menuToggled;
    setMenuToggled(toggled)
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 1800,
      once: true,
    })
  },[]);

  return (
    <React.Fragment>
      <header>
        <MenuToggler 
          handleToggle={toggleMenu}
          toggled={menuToggled}
        />
        <NavBar
          handleToggle={toggleMenu}
          toggled={menuToggled}
        />
        <Element name="home" className="element">
          <div className="landing-text">
            <h1>Simon He</h1>
            <h6>Full Stack Web Developer</h6>
          </div>
        </Element>
      </header>

      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
      <footer className="copyright">
        <div className="up" id="up" onClick={e => scrollToTop()}>
          <i className="fas fa-chevron-up"></i>
        </div>
        <p>&copy; 2020 Simon He</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
