import React from 'react';

import SkillMeter from '../skill-meter/skill-meter.component';
import NinetyEight from '../../images/98percent-175x175.png';
import SeventySeven from '../../images/77percent-175x175.png';
import EightyFive from '../../images/85percent-175x175.png';
import NinetyOne from '../../images/91percent-175x175.png';

import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer
} from '../generic/generic.styles';


const MySkills = ({areSkillsVisible}) => (
    <GenericContainer>
        <GenericHeadingWrapper>My Skills</GenericHeadingWrapper>
        <GenericListContainer id='skills-section'>
            <SkillMeter
                areSkillsVisible={areSkillsVisible}
                text='HTML & CSS'
                img={NinetyEight}
            />
            <SkillMeter
                areSkillsVisible={areSkillsVisible}
                text='ES6'
                img={NinetyOne}
            />
            <SkillMeter
                areSkillsVisible={areSkillsVisible}
                text='REACT/REDUX'
                img={EightyFive}
            />
            <SkillMeter
                areSkillsVisible={areSkillsVisible}
                text='SQL & NoSQL'
                img={SeventySeven}
            />
        </GenericListContainer>
    </GenericContainer>
);

export default MySkills;