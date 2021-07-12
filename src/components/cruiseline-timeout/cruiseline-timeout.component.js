import React from 'react';

import {
    TimeoutContainer,
    TextWrapper,
    TimeoutWrapper,
    ButtonWrapper,
    ArrowWrapper
} from './cruiseline-timeout.styles';

import Timeout from '../timeout/timeout.component';


const CruiselineTimeout = () => (
    <TimeoutContainer>
        <TextWrapper>ONLY</TextWrapper>
        <TimeoutWrapper>
            <Timeout />
        </TimeoutWrapper>
        <TextWrapper>LEFT</TextWrapper>
        <ButtonWrapper type='button'>ENDS SOON <ArrowWrapper>&#9657;</ArrowWrapper></ButtonWrapper>
    </TimeoutContainer>
);

export default CruiselineTimeout;