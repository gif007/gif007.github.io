import React from 'react';
import { Link } from 'gatsby';

import WeddingThumbnail from '../../images/index/wedding-template-thumb-300x300.png';
import CruiselineThumbnail from '../../images/index/cruiseline-template-thumb-300x300.png';
import CrwnClothing from '../../images/index/crwn-clothing-website-thumb-300x300.png';

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

            <Link to='https://crwn-clothing-ns.herokuapp.com/'>
                <MenuItemContainer>
                    <BackgroundImageContainer
                        style={{backgroundImage: `url(${CrwnClothing}`}}
                    />
                </MenuItemContainer>
            </Link>

            <Link to='/cruiseline-template/'>
                <MenuItemContainer>
                    <BackgroundImageContainer
                        style={{backgroundImage: `url(${CruiselineThumbnail})`}}
                    />
                </MenuItemContainer>
            </Link>

            <Link to='/wedding-template/'>
                <MenuItemContainer>
                    <BackgroundImageContainer
                        style={{backgroundImage: `url(${WeddingThumbnail}`}}
                    />
                </MenuItemContainer>
            </Link>

        </PortfolioGrid>
    </GenericContainer>
);

export default Portfolio;