import React from 'react';

import {
    SuperDealsWrapper,
    Row,
    Deal,
    Title,
    Subtitle,
    Discount,
    ButtonWrapper
} from './cruiseline-super-deals.styles';

import WaterLeft from '../../images/cruiseline/water-left.png';
import WaterRight from '../../images/cruiseline/water-right.png';


const CruiselineSuperDeals = () => (
    <SuperDealsWrapper>
        <Row>
            <Deal
                color='white'
                style={{backgroundImage: `url(${WaterLeft})`}}
            >
                <Title>BOOK EARLY</Title>
                <Subtitle>SAILINGS THROUGH APRIL 2024</Subtitle>
                <Discount>UP TO $100 ONBOARD CREDIT + MORE</Discount>
            </Deal>
            <Deal
                color='white'
                style={{backgroundImage: `url(${WaterRight})`}}
            >
                <Title>SAIL SOON</Title>
                <Subtitle>SAILINGS THROUGH DECEMBER 2021</Subtitle>
                <Discount>UP TO 40% OFF CRUISE RATES</Discount>
            </Deal>
        </Row>
        <Deal featured>
            <Title>SMILE AND GET AWAY TO HALF MOON CAY</Title>
            <Subtitle>A PRIVATE ISLAND PARADISE</Subtitle>
            <ButtonWrapper>LEARN MORE &#9657;</ButtonWrapper>
        </Deal>
    </SuperDealsWrapper>
);

export default CruiselineSuperDeals;