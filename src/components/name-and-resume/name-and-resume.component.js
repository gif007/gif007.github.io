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
        <DownloadResumeWrapper href='https://drive.google.com/file/d/1v_Z-aUjN9Xd9Nr238hymdpuQr5rcO7L1/view?usp=sharing'>
            Download Resume
        </DownloadResumeWrapper>
    </NameAndResumeContainer>
);

export default NameAndResume;