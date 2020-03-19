import React from 'react'
import { Element } from 'react-scroll';
const Services = props => {
    return (
        <Element name="services" className="element">
            <section className="services" id="services">
                <div className="container">
                    <div className="section-heading">
                        <h1>Services</h1>
                        <h6>What I can do for you</h6>
                    </div>
                    <div className="my-skills">
                        <div className="skill" data-aos="fade-in" data-aos-delay="300">
                            <div className="icon-container">
                                <i className="fas fa-layer-group"></i>
                            </div>
                            <h1>Web Design</h1>
                            <p>
                                As a full stack engineer, I am able to build a website from scratch and implement features that a user wants.
                                Functionality is key. I have learned to build with the idea of mobile-first developemnt where I can scale up the design
                                from mobile view to desktop view.
                            </p>
                        </div>
                        <div className="skill" data-aos="fade-in" data-aos-delay="600">
                            <div className="icon-container">
                                <i className="fas fa-code"></i>
                            </div>
                            <h1>Web Development</h1>
                            <p>
                                Backend routes are no big deal for me. I have experience connecting to databases and parsing information from them
                                as well as using my favorite framework React.js in implementing components for the data obtained.
                            </p>
                        </div>
                        <div className="skill" data-aos="fade-in" data-aos-delay="900">
                            <div className="icon-container">
                                <i className="fas fa-chart-bar"></i>
                            </div>
                            <h1>Data Analytics</h1>
                            <p>
                                Using dataframes in python, I have learned how to filter outliers and what to do in cases where there could be skews in the data
                                where the kurtosis could either be mesokurtic, leptokurtic, or platykurtic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>        
        </Element>        
    );
}
export default Services