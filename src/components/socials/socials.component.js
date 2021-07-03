import React from 'react';
import {ImageContainer } from './socials.styles';

import GitHubLogo from '../../images/GitHub-Mark-32px.png';
import LinkedInLogo from '../../images/LI-In-Bug.png';



const Socials = () => (
    <div>
        <ImageContainer>
            <a href='https://github.com/gif007'>
                <img src={GitHubLogo} alt='GitHub icon'/>
            </a>
        </ImageContainer>
        <ImageContainer>
            <a href='https://www.linkedin.com/in/neil-carruthers/'>
                <img src={LinkedInLogo} alt='LinkedIn icon'/>
            </a>
        </ImageContainer>
    </div>
);

export default Socials;