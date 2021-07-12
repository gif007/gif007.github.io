import React from 'react';

import {
    HeroWrapper,
    TravelDetails,
    TravelDetailButton
} from './cruiseline-hero.styles';

import Beach from '../../images/cruiseline/running-into-water.png';


const CruiselineHero = () => (
    <HeroWrapper style={{backgroundImage: `url(${Beach})`}}>
        <div />
        <TravelDetails>
            <TravelDetailButton>SAIL TO &#9662;</TravelDetailButton>
            <TravelDetailButton>SAIL FROM &#9662;</TravelDetailButton>
            <TravelDetailButton>DATE &#9662;</TravelDetailButton>
            <TravelDetailButton>DURATION &#9662;</TravelDetailButton>
            <TravelDetailButton bigRed>SEARCH</TravelDetailButton>
        </TravelDetails>
    </HeroWrapper>
);

export default CruiselineHero;