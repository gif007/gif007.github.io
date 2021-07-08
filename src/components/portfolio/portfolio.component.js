import React from 'react';
import { Link } from 'gatsby';

import WeddingThumbnail from '../../images/wedding-template-thumb-300x300.png';

import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer
} from '../generic/generic.styles';

import { MenuItemContainer, BackgroundImageContainer } from './portfolio.styles';

const Portfolio = () => (
    <GenericContainer id='portfolio'>
        <GenericHeadingWrapper>Portfolio</GenericHeadingWrapper>
        <GenericListContainer>
            <Link to='/wedding-template/'>
                <MenuItemContainer>
                    <BackgroundImageContainer
                        style={{backgroundImage: `url(${WeddingThumbnail}`}}
                    />
                </MenuItemContainer>
            </Link>
        </GenericListContainer>
    </GenericContainer>
);

export default Portfolio;