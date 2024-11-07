import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AirplaneTextButton from './AirplaneTextButton';
import GreenAirplane from "../Assets/Personal_Brand/Paper-Airplane-Green.png"
import '../index.css';

const InfoCard = ({ imageSrc, title, techUsed, description, projectLink }) => {
    return (
      <div className="Info-Card">
          <img src={imageSrc} alt= {`${title} project preview`} className="Info-Card-Image" />
          <div className="Info-Card-Overlay">
            <h3 className="Info-Card-Title">{title}</h3> 
            <p className='Info-Card-Tech-Used'>{techUsed}</p>
            <div className='Info-Card-Description-Container'>
              <p className="Info-Card-Description">{description}</p>
            </div>
            <AirplaneTextButton to={projectLink} text='Learn More' image={GreenAirplane}/>
          </div>
        </div>
    );
  };
  
  InfoCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  techUsed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired
  };
  
  export default InfoCard;
