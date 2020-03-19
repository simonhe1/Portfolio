import React from 'react'
import { Element } from 'react-scroll';
const Contact = props => {
    return (
        <Element name="contact" className="element">
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-heading">
                        <h1>Contact</h1>
                        <h6>Currently Unavailable</h6>
                    </div>
                    <form action="" data-aos="fade-up" data-aos-delay="300">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name..." disabled required/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email..." disabled required/>            
                        <label htmlFor="services">Services:</label>
                        <select name="services" id="services" disabled>
                        <option value="">Web Design</option>
                        <option value="">Web Development</option>
                        <option value="">Web Design/Development</option>
                        </select>
                        <label htmlFor="subject">Subject:</label>
                        <textarea name="subject" id="subject" cols="10" rows="10" disabled></textarea>
                        <input type="submit" value="Submit" disabled />
                    </form>
                </div>  
            </section>            
        </Element>        
    );
}
export default Contact