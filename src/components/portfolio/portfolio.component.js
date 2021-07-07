import React from 'react';
import { Link } from 'gatsby';

import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer
} from '../generic/generic.styles';


const Portfolio = () => (
    <GenericContainer id='portfolio'>
        <GenericHeadingWrapper>Portfolio</GenericHeadingWrapper>
        <GenericListContainer>
            <Link to='/wedding-template/'>Click me</Link>
        </GenericListContainer>
    </GenericContainer>
);

export default Portfolio;