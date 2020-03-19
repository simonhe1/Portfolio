import React from 'react'
import { Element } from 'react-scroll';
const Portfolio = props => {
    return (
        <Element name="portfolio" className="element">
            <section className="portfolio" id="portfolio">
                <div className="container">
                    <div className="section-heading">
                        <h1>Portfolio</h1>
                        <h6>View some of my recent work</h6>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="300">
                            <img src="https://i.ibb.co/Kh50XBS/Gamehub.png" alt="Game Hub"/>
                        </div>
                        <div className="portfolio-description" data-aos="fade-left" data-aos-delay="600">
                            <h6>Web Development</h6>
                            <h1>Game Hub</h1>
                            <p>
                                Made a game hub with 2 other developers which hosts classic arcade games such as pong and snake.
                            </p>
                            <a href="https://github.com/jwong28/GameHub2.0" className="cta">View Details</a>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="900">
                            <h6>Web Development</h6>
                            <h1>TruWalks</h1>
                            <p>
                                Created a white label web application from scratch where for our purpose we chose one possible feature
                                for the application which was dog walking. For this app, we made a full stack scheduling application 
                                with a self created calendar view mimicking google calendar which provides users with a very intuitive 
                                navigation through the app.
                            </p>
                            <a href="https://github.com/arif-banai/TruWalks" className="cta">View Details</a>
                        </div>
                        <div className="portfolio-img" data-aos="fade-left" data-aos-delay="1200">
                            <img src="https://i.ibb.co/Bj7t6W2/TruWalks.png" alt="TruWalks"/>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <div className="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="1500">
                            <img src="https://i.ibb.co/Zf7MCP9/Sound-Of-Mind.jpg" alt="Sound Of Mind"/>
                        </div>
                        <div className="portfolio-description" data-aos="fade-left" data-aos-delay="1800">
                            <h6>Mobile Design</h6>
                            <h1>Sound Of Mind</h1>
                                <p>
                                    Worked with 3 other developers to develop a mobile based app to compete against 426 other teams in a CUNY startup hackathon.
                                    In this app, we utilized Firebase and Microsoft Azure, Google Maps API, and IBM Watson to connect and inform users about health
                                    issues such as depression, alzheimers, schizophrenia, etc. and provide possible treatment if there are.
                                </p>
                                <a href="https://github.com/simonhe1/SoM" className="cta">View Details</a>
                        </div>
                    </div>          
                </div>
            </section>        
        </Element>
    );
}
export default Portfolio