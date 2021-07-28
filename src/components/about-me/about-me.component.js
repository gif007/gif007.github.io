import React from 'react';
import {
    AboutMeContainer,
    HeadingWrapper,
    SummaryWrapper,
    LookingForWrapper
} from './about-me.styles';

const AboutMe = () => (
    <AboutMeContainer id='about'>
        <HeadingWrapper>About Me</HeadingWrapper>
        <SummaryWrapper>A full stack JavaScript developer with front end experience in modern JavaScript, React and Redux. Back end experience in PHP, Python and Node. Innovative, creative, collaborative team player.</SummaryWrapper>
        <LookingForWrapper>I am looking for work</LookingForWrapper>
    </AboutMeContainer>
);

export default AboutMe;