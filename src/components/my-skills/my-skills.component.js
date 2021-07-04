import React from 'react';
import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer
} from '../generic/generic.styles';

const MySkills = () => (
    <GenericContainer>
        <GenericHeadingWrapper>My Skills</GenericHeadingWrapper>
        <GenericListContainer>
            <div>HTML & CSS</div>
            <div>ES6</div>
            <div>REACT/REDUX</div>
            <div>SQL & NoSQL</div>
        </GenericListContainer>
    </GenericContainer>
);

export default MySkills;