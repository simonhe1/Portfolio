import React from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
const NavBar = props => {
    const topnavStyle = {
        top: '0',
        borderRadius: 'initial',
    }

    return (
        <nav className="top-nav" style={props.toggled ? topnavStyle : {}}>
          <ul className="nav-list">
            <li>
              <Link 
                activeClass="active"
                className="nav-link" 
                to="home"
                spy={true}
                smooth={true}
                duration={2000}
                onClick={e => props.handleToggle()}
              >Home</Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="nav-link" 
                to="about"
                spy={true}
                smooth={true}
                duration={2000}
                onClick={e => props.handleToggle()}
              >About</Link>
            </li>
            <li>
              <Link 
                activeClass="active"
                className="nav-link" 
                to="services"
                spy={true} 
                smooth={true} 
                duration={2000}
                onClick={e => props.handleToggle()}
              >Services</Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="nav-link" 
                to="portfolio" 
                spy={true} 
                smooth={true} 
                duration={2000}
                onClick={e => props.handleToggle()}
              >Portfolio</Link>
            </li>
            <li>
              <Link 
                activeClass="active" 
                className="nav-link" 
                to="experience" 
                spy={true} 
                smooth={true} 
                duration={2000}
                onClick={e => props.handleToggle()}
              >Experience</Link>
            </li>
            <li>
              <Link 
                activeClass="active" 
                className="nav-link" 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={2000}
                onClick={e => props.handleToggle()}
              >Contact</Link>
            </li>            
          </ul>
        </nav>
    );
}
export default NavBar;