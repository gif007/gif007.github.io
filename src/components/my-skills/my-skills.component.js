import React from 'react';
import NinetyEight from '../../images/98-175x175.png';
import SkillMeter from '../skill-meter/skill-meter.component';

import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer
} from '../generic/generic.styles';


const MySkills = () => (
    <GenericContainer>
        <GenericHeadingWrapper>My Skills</GenericHeadingWrapper>
        <GenericListContainer>
            <SkillMeter text='HTML & CSS' img={NinetyEight} />
            <SkillMeter text='ES6' img={NinetyEight} />
            <SkillMeter text='REACT/REDUX' img={NinetyEight} />
            <SkillMeter text='SQL & NoSQL' img={NinetyEight} />
        </GenericListContainer>
    </GenericContainer>
);

export default MySkills;