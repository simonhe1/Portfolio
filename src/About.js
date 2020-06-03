import React from 'react';
import { Element } from 'react-scroll';
const About = props => {
    return (
        <Element name="about" className="element">
            <section className="about" id="about">
                <div className="container">
                    <div className="profile-img" data-aos="fade-right" data-aos-delay="300">
                        <img src="https://i.ibb.co/CnLdS45/Profile-Pic.jpg" alt="Profile Pic"/>
                    </div>
                    <div className="about-details" data-aos="fade-left" data-aos-delay="500">
                        <div className="about-heading">
                            <h1>About</h1>
                            <h6>Myself</h6>
                        </div>
                        <p>
                        I have recently graduated from Queens College with a Bachelor of Science degree majoring in Computer Science. I have experience in Java (6 years), C++ (5 years),
                        and full stack development (2 years). I have finished attending a bootcamp for full stack development where I learnt React, Express, Node, and PostgreSQL with
                        Seuqelize ORM(Object relational mapping). Current projects I've been working on are one web based app called TruWalks which is a white label app which means we can
                        potentially sell the structure code to other people for them to personalize. For TruWalks, I am working with 2 other developers, I'm mainly working on the design portion 
                        and am implementing the front end part, appending values to the database and such. Another project that I'm working on is called Easy Split. This app is created with React-Native
                        so it's cross-platform for IOS and Android. This app will provide users with a very simple and fast way to split the bill when they eat together with other people. For this app,
                        Redux was used to cache data to minimize uneccessary rendering of components. Other than the comp sci field, I love learning to play the piano on my breaks and listening to korean songs that I recently got into.
                        </p>
                        <div className="social-media">
                            <ul className="nav-list">
                                <li>
                                    <a href="https://www.facebook.com/simon.he.925" className="icon-link">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/simonhe1/" className="icon-link">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCvIFoTKapYVKLvJ6yx1nG6w?view_as=subscriber" className="icon-link">
                                        <i className="fab fa-youtube-square"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>        
        </Element>        
    );
}
export default About;