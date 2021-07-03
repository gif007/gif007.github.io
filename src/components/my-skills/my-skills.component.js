import React from 'react';
import {
    MySkillsContainer,
    HeadingWrapper,
    SkillContainer
} from './my-skills.styles';

const MySkills = () => (
    <MySkillsContainer>
        <HeadingWrapper>My Skills</HeadingWrapper>
        <SkillContainer>
            <div>HTML & CSS</div>
            <div>ES6</div>
            <div>REACT/REDUX</div>
            <div>SQL & NoSQL</div>
        </SkillContainer>
    </MySkillsContainer>
);

export default MySkills;