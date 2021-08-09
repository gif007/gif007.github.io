import React from 'react';
import {ImageContainer } from './socials.styles';

import GitHubLogo from '../../images/socials/GitHub-Mark-32px.png';
import LinkedInLogo from '../../images/socials/LI-In-Bug.png';
import TwitterLogo from '../../images/socials/twitter.png';



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
        <ImageContainer>
            <a href='https://twitter.com/NeilCarruthers_'>
                <img src={TwitterLogo} alt='Twitter icon'/>
            </a>
        </ImageContainer>
    </div>
);

export default Socials;