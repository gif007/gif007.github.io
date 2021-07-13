import React from 'react';

import {
    DealCardWrapper,
    DetailsWrapper,
    DurationWrapper,
    TitleWrapper,
    TextWrapper,
    PriceWrapper,
    DealButton
} from './cruiseline-deal-card.styles';


const DealCard = ({index, component}) => (
    <DealCardWrapper>
        <img key={index} src={component.image} alt='resort' />
        <DetailsWrapper>
            <DurationWrapper>{component.duration}</DurationWrapper>
            <TitleWrapper>{component.title}</TitleWrapper>
            <TextWrapper>CRUISES FROM</TextWrapper>
            <PriceWrapper>{component.price}</PriceWrapper>
            <TextWrapper>PER PERSON</TextWrapper>
            <DealButton>SHOP NOW</DealButton>
        </DetailsWrapper>
    </DealCardWrapper>
);

export default DealCard;