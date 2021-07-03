import React from 'react';
import {
    NameAndResumeContainer,
    NameWrapper,
    TitleWrapper,
    DownloadResumeWrapper
} from './name-and-resume.styles';


const NameAndResume = () => (
    <NameAndResumeContainer>
        <NameWrapper>Neil Carruthers</NameWrapper>
        <TitleWrapper>Front-End Developer Specializing in React and Redux</TitleWrapper>
        <DownloadResumeWrapper onClick={() => alert('Download should start shortly')}>Download Resume</DownloadResumeWrapper>
    </NameAndResumeContainer>
);

export default NameAndResume;