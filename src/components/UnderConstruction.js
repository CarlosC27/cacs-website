import React, { useState } from 'react';
import NavBar from './NavBar';
import { Footer } from './Footer';
import '../index.css';

const UnderConstruction = (props) => {
    return(
        <>
        <NavBar/>
        <div className='Under-Construction-Page'>
            <div className='Under-Construction-Section'>
                <img 
                    src="https://media1.tenor.com/m/TyIFCCHEhyAAAAAC/taylor-swift-taylor.gif" 
                    alt="Under Construction" 
                    className="construction-gif"
                />
                <h1 className="construction-message">
                    Looks like we're still under construction here! 
                </h1>
                <p>Come back soon for the reveal!</p>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
        </>
    );
}

export default UnderConstruction