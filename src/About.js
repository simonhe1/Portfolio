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
                            I am currently a senior at Queens College. I'm currently attending a bootcamp for full stack development where I learn React, Express, Node, and PostgreSQL
                            with Seuqelize ORM(Object relational mapping). Current projects I've been working on are one web based app called TruWalks which is a white label app which
                            means we can potentially sell the structure code to other people for them to personalize and for that app I worked with 2 other people, I mainly worked on 
                            the design portion and implementing the front end part, appending values to the database and such. Another project that I'm thinking of working on soon is to 
                            make a music recommender which will use the spotify API to see a song's beat and frequency and try to make a better music recommendation based on those values. 
                            Other than the comp sci field, I love learning to play the piano on my breaks and listening to korean songs that I recently got into.
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