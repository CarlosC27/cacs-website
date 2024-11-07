import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import AirplaneTextButton from './AirplaneTextButton';
import InfoCard from './Info-Cards';
import { Footer } from './Footer';
import '../index.css';
import Elotes from "../Assets/Images/My-Images/I-Heart-Elotes.jpg"
import Picnic from "../Assets/Images/My-Images/Picnic.jpg"
import GreenAirplane from "../Assets/Personal_Brand/Paper-Airplane-Green.png"
import CreamAirplane from"../Assets/Personal_Brand/Paper-Airplane-Cream.png"
import GreenlinkedIn from "../Assets/Personal_Brand/LinkedIn-green.png"
import GreenInstagram from "../Assets/Personal_Brand/green-instagram.png"
import IntroImage from "../Assets/Images/My-Images/country-surf-boards.JPG"
import GreenGithub from "../Assets/Personal_Brand/github red.png"

const projects = [
    {
      imageSrc: require("../Assets/Case Studies/Coast2Coast/MacBookProMockup4.jpg"),
      title: 'Coast 2 Cost Cousins BBQ',
      techUsed: 'React, HTML, CSS, Figma',
      description: "Designed the company’s website layout and user interface to create an engaging, user-friendly experience. I then developed the site using React, "+
      "incorporating functionality and aesthetics for a seamless, polished online presence, while also adding custom photography to enhance the brand’s visual storytelling.",
      projectLink: '/Projects',
    },
    {
      imageSrc: require("../Assets/Case Studies/Rotator/MacBookProMockup1.png"),
      title: 'Rotator Creative',
      techUsed: 'Figma, Adobe CC',
      description: "Focused on UI/UX design for the company's website, conducting in-depth research on past projects to understand the company’s visual and functional style. " + 
      "Developed mockups, animations, anduser interfaces, iterating designs to align with both user needs and  enhancing the website's appeal and usability.",
      projectLink: '/Projects',
    },
    {
      imageSrc: require("../Assets/Case Studies/Grit City Magazine/The_City_Between.jpg"),
      title: 'The City Between Article',
      techUsed: 'InDesign, Photoshop, Illustrator',
      description: "Collaborated with Grit City Magazine's lead designer and editor, conducted research to align the visuals with the article's theme, and learned InDesign to design a compelling, " +  
      "reader-friendly layout. Through iterative feedback, I developed a final design that enhanced the storytelling and matched the magazine’s aesthetic.",
      projectLink: '/Projects',
    },
    {
      imageSrc: require("../Assets/Case Studies/Viable Veganism/Viable-Veganism-MacBookProMockup.jpg"),
      title: 'Viable Veganism Website',
      techUsed: 'Figma, Photoshop',
      description: "Collaborated closely with designers and developers to create a cohesive website design. Contributed to crafting an engaging user experience that aligned with the brand's mission, ensuring the website was visually appealing and user-friendly.",
      projectLink: '/Projects',
    },
    {
      imageSrc: require("../Assets/Case Studies/Husky Fitness/Husky-Fitness-Ap-Phone-Mockup.jpg"),
      title: 'Husky Fitness',
      techUsed: 'Figma, Adobe CC',
      description: "UX Design project focused on developing an app for the UW Seattle fitness center. The app is designed to assist users in creating effective workout schedules and routines, providing a user-friendly interface to enhance the fitness experience for the university community.",
      projectLink: '/Projects',
    }
  ]


const Homepage = (props) => {

    return(
        <div>
            <section>
                <NavBar/>
            </section>
        <main className="Homepage-Content">
            <div className="Intro-Section">
                <div className="Intro">
                    <div className='Intro-title-and-image'>
                        <h1 className="Title-Heading-Orange">Designing with Purpose, Coding with Precision</h1>
                        <img src={IntroImage} alt='polaroid of Carlos'/>
                    </div>
                    <h2 className="Subtitle-Heading">Carlos Alexis Carrillo-Sandoval</h2>
                    <p>
                        Hello! I Creating Digital Solutions that Inspire. Specializing in Software Development and User Experience Design, focusing 
                        on building solutions that work seamlessly and efficiently. Beyond design and technology, I'm passionate about collecting vinyl 
                        records, exploring nature, and capturing special moments with my Polaroid camera
                    </p>
                </div>
                <div className="Airplane-Links">
                    <AirplaneTextButton to="/Projects" text="View Projects" image={GreenAirplane}/>
                    <AirplaneTextButton to="/About" text="More About Me" image={GreenAirplane}/>
                    <AirplaneTextButton to="/Contact" text="Contact Me" image={GreenAirplane}/>
                </div>
            </div>

            <div className="Recent-Projects-Section">
                <h1 className="Title-Heading-Yellow">Recent Projects</h1>
                <div className="Project-Info-Cards">
                    <div className="spacer"></div>
                    <InfoCard imageSrc={require("../Assets/Case Studies/Coast2Coast/MacBookProMockup4.jpg")} title='Coast 2 Cost Cousins BBQ' techUsed='React, HTML, CSS, Figma' 
                    description='Designed the company’s website layout and user interface to create an engaging, user-friendly experience. I then developed the site using React, 
                    incorporating functionality and aesthetics for a seamless, polished online presence, while also adding custom photography to enhance the brand’s visual storytelling.' projectLink='/Projects' />
                    <InfoCard imageSrc={require("../Assets/Case Studies/Rotator/MacBookProMockup1.png")} title='Rotator Creative' techUsed='Figma, Adobe CC' description="Focused on UI/UX design for the company's website, conducting 
                    in-depth research on past projects to understand the company’s visual and functional style. Developed mockups, animations, anduser interfaces, iterating designs to align with both user needs and  enhancing the website's appeal and usability."
                    projectLink='/Projects' />
                    <InfoCard imageSrc={require("../Assets/Case Studies/Grit City Magazine/The_City_Between.jpg")} title='The City Between Article' techUsed='Indesign, Photoshop, Illustrator' description="Collaborated with Grit City Magazine's lead designer and editor,
                     conducted research to align the visuals with the article's theme, and learned InDesign to design a compelling, reader-friendly layout. Through iterative feedback, I developed a final design that enhanced the storytelling and matched the magazine’s aesthetic."
                     projectLink='/Projects' />
                    <InfoCard imageSrc={require("../Assets/Case Studies/Viable Veganism/Viable-Veganism-MacBookProMockup.jpg")}  title="Viable Veganism Website" techUsed='Figma, Photoshop'
                    description="Collaborated closely with designers and developers to create a cohesive website design. Contributed to crafting an engaging user experience that aligned with the brand's mission, ensuring the website was visually appealing and user-friendly." projectLink="/Projects" />
                    <InfoCard imageSrc={require("../Assets/Case Studies/Husky Fitness/Husky-Fitness-Ap-Phone-Mockup.jpg")}  title="Husky Fitness" techUsed='Figma, Adobe CC'
                        description="UX Design project focused on developing an app for the UW Seattle fitness center. The app is designed to assist users in creating effective workout schedules and routines, providing a user-friendly interface to enhance the fitness experience for the university community." projectLink="/Projects" />
                </div>
            </div>
             <div className="About-Me-Section">
                <div className="About-Me-Section-Text-Content">
                    <h1 className="Title-Heading-Orange">Its Me! Hi!</h1>
                    <p>
                        I am first generation student at the University of Washington. I am currently a junior majoring 
                        in Informatics with a focus area in Software Development and Human-Computer Interaction. 
                        I chose this major because of it’s focus on the intersectionality of technology and human values. 
                        I have experience with computer programming, web development, and user experience design.
                         My experience working in the hospitality industry has allowed me to develop an eye for attention to detail and managing multiple tasks in a timely manner. 
                    </p>
                    <AirplaneTextButton to="/About" text="Learn More About Me" image={GreenAirplane}/>
                </div>
                <div className="About-Me-Section-Img-Container">
                     <img src={Elotes} alt="Carlos Carrillo holding an elote, image is a polaroid" className="About-Me-Section-Img" />
                </div>
            </div>
            <div className="Contact-Me-Section">
                <div className="Contact-Me-Section-Text-Content">
                    <h1 className="Title-Heading-Yellow">Contact Me</h1>
                    <p>
                        I’m always open to chat about school, research or work opportunities, design, programming, pop culture, or simply just networking. 
                        Please feel free to reach out and include as much information as possible so I can respond appropriately.
                    </p>
                    <AirplaneTextButton to="mailto:carlos.cs.2799@gmail.com" text="Email me at carlos.cs.2799@gmail.com" image={CreamAirplane}/>
                </div>
                <div className="Contact-Me-Section-Img-Container">
                     <img src={Picnic} alt="Carlos Carrillo holding an elote, image is a polaroid" className="About-Me-Section-Img" />
                </div>
            </div>
            <div className="Connect-With-Me-Elsewhere">
                <h2>Connect With Me Elsewhere</h2>
                <div className="Social-Links-Box">
                    <div className="Social-Links">
                        <img src={GreenlinkedIn} alt='the linkedin logo in green'/>
                        <AirplaneTextButton text='LinkedIn' to="https://www.linkedin.com/in/cacs27/" image={GreenAirplane} />
                    </div>
                    <div className="Social-Links">
                        <img src={GreenInstagram} alt='the Instagram in logo in green'/>
                        <AirplaneTextButton text='Instagram' to="https://www.instagram.com/carlosjtj13/" image={GreenAirplane} />
                    </div>
                    <div className="Social-Links">
                        <img src={GreenGithub} alt='the GitHub logo in green'/>
                        <AirplaneTextButton text='GitHub' to="https://github.com/CarlosC27" image={GreenAirplane} />
                    </div>
                </div>

            </div>
    
        </main>
        <Footer />
        </div>
    );
}

export default Homepage