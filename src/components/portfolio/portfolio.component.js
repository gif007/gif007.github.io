import React from 'react';
import { Link } from 'gatsby';

import WeddingThumbnail from '../../images/wedding-template-thumb-300x300.png';

import {
    GenericContainer,
    GenericHeadingWrapper
} from '../generic/generic.styles';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    PortfolioGrid
} from './portfolio.styles';

const Portfolio = () => (
    <GenericContainer broad id='portfolio'>
        <GenericHeadingWrapper>Portfolio</GenericHeadingWrapper>
        <PortfolioGrid>
            
            <Link to='/wedding-template/'>
                <MenuItemContainer>
                    <BackgroundImageContainer
                        style={{backgroundImage: `url(${WeddingThumbnail}`}}
                    />
                </MenuItemContainer>
            </Link>

            <Link to='/test/'>
                <MenuItemContainer>
                    Test
                </MenuItemContainer>
            </Link>

            <Link to='/cruiseline-template/'>
                <MenuItemContainer>
                    Cruiseline
                </MenuItemContainer>
            </Link>

        </PortfolioGrid>
    </GenericContainer>
);

export default Portfolio;