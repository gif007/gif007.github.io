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
        <SummaryWrapper>Hello, I'm a freelance hacker</SummaryWrapper>
        <LookingForWrapper>I am looking for work</LookingForWrapper>
    </AboutMeContainer>
);

export default AboutMe;