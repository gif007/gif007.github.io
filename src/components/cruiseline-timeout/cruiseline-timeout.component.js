import React from 'react';

import {
    TimeoutContainer,
    TextWrapper,
    TimeoutWrapper
} from './cruiseline-timeout.styles';

import Timeout from '../timeout/timeout.component';


const CruiselineTimeout = () => (
    <TimeoutContainer>
        <TextWrapper>HURRY ONLY</TextWrapper>
        <TimeoutWrapper>
            <Timeout />
        </TimeoutWrapper>
        <TextWrapper>LEFT</TextWrapper>
    </TimeoutContainer>
);

export default CruiselineTimeout;