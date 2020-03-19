import React from 'react'
import { Element } from 'react-scroll';
const Experience = props => {
    return (
        <Element name="experience" className="element">
            <section className="experience" id="experience">
                <div className="container">
                    <div className="section-heading">
                        <h1>Work/Volunteer Experience</h1>
                        <h6>Past and current Experiences</h6>
                    </div>
                    <div className="timeline" data-aos="fade-down" data-aos-delay="300">
                        <ul>
                            <li className="date" data-date="2019 - 2019">
                                <h1>AgeBrilliantly</h1>
                                <p>
                                    I worked as an intern at Age Brilliantly where I was tasked with managing their database and researched on
                                    ways to target the younger demographic in order to help them save for the future.
                                </p>
                            </li>
                            <li className="date" data-date="2017 - 2017">
                                <h1>QCon</h1>
                                <p>
                                    During the summer, I volunteered at QCon, a conference for senior software developers, where I aided in setting
                                    up panels and spectated in some workshops hosted by big name companies such as Shopify and Netflix.
                                </p>
                            </li>
                            <li className="date" data-date="2014 - 2014">
                                <h1>N&Uuml;apps</h1>
                                <p>
                                    As a part of Virtual Enterprise, I was given the opportunity to be Software Lead Developer in charge of 4 developers
                                    in the creation of a mobile fashion application where we sold virtual clothing and accessories to other Virtual Enterprise
                                    users. For this app, there were 2 development teams, one for IOS and the other for Android and I was in charge of the Android team.
                                    During the development process, I worked with the designers and was able to push out a total of 24 items onto the fashion panel.
                                </p>
                            </li>              
                        </ul>
                    </div>
                </div>
            </section>
        </Element>        
    );
}
export default Experience