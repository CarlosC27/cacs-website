import React, { useState } from 'react';
import NavBar from './NavBar';
import '../index.css';

const About = (props) => {
    return(
        <>
         <section>
                <NavBar/>
            </section>
            <main>
                <h1 className="Title-Heading-Red">Its Me! Hi!</h1>
                <p>
                    I am a first generation student at the University of Washington. I am currently a junior majoring 
                    in Informatics with a focus area in Software Development and Human-Computer Interaction. 
                    I chose this major because of it’s focus on the intersectionality of technology and human values. 
                    I have experience with computer programming, web development, and user experience design.
                    My experience working in the hospitality industry has allowed me to develop an eye for attention to detail and managing multiple tasks in a timely manner while keeping clear communication with my team and clients
                </p>
                <p>
                    I have spent most of my life in Washington State. I grew up in the Federal Way area in my early years. When I turned eleven I moved with my family to Las Varas Nayarit Mexico, a costal town on the west coast of Mexico. It was there were I first discovered programming and my journey into the programming world began.
                    At  age seventeen I moved back to Washington and graduated high school at Federal High School.
                    After graduation I started my college journey at Highline College where I earned my Associates in Science degree of Computer Science.
                    After a year from completing my time at Highline College I got accepted into the University of Washington where I decided to major in Informatics due to the diverse set of skills the program offers.
                    Aside from design and technology I have a fascination for collecting records, nature, and snapping polaroids of special moments.
                </p>
            </main>
        </>
    );
}

export default About