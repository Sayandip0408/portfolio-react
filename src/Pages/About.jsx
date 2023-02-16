import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import Skills from '../Components/Skills';
import Education from '../Components/Education';

const About = () => {
    return (
        <div className='container pt-4 pb-4'>
            <div className='mt-5'>
                <h3 className='text-center mt-3 mb-3 text-primary aboutHeading'>SHORT STORY ABOUT ME AND THE BEGINING OF MY JOURNEY <InfoIcon /></h3>
                <p className='about-para'>My name is <b>Sayandip Adhikary</b>, usually called Sandy, I came from West Bengal, India. Currently I am a recent <b>Master of Computer Application</b> graduate from <b>University of Kalyani</b> and a frontend developer looking for a opportunity to kick start my career.</p>
                <p className="about-para">My short term goal is to get palced in a reputed company, which allows me to enhance my skills and knowledge. My long term goal would be to reach a higher position in the same company. My strength is that I can adapt quickly to any environment.</p>
                <p className="about-para">My hobbies are photography and playing cricket. I also love watching movies and webseries in my leisure.</p>
            </div>
            <Education />
            <Skills />
        </div>
    )
}

export default About