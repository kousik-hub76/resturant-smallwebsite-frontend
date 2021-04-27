import React from 'react'
import aboutimage from '../images/about1.jpg';
function About() {
    return (
        <div id="about">
            <div className='about-text'>
                <h1>UPCOMING EVENT</h1>
                <p>A hamburger is a sandwich consisting of one or more cooked patties</p>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt='' />
            </div>
        </div>
    )
}

export default About
