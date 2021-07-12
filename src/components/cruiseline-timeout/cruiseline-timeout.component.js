import React from 'react';

import {
    TimeoutContainer,
    TextWrapper,
    TimeoutWrapper
} from './cruiseline-timeout.styles';

import Timeout from '../timeout/timeout.component';


const CruiselineTimeout = () => (
    <TimeoutContainer>
        <TextWrapper alignment='right'>HURRY ONLY</TextWrapper>
        <TimeoutWrapper>
            <Timeout />
        </TimeoutWrapper>
        <TextWrapper alignment='left'>LEFT</TextWrapper>
    </TimeoutContainer>
);

export default CruiselineTimeout;