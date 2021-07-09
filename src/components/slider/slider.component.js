import React, { useState } from 'react';

import {
    SliderWrapper,
    LeftButton,
    SlideShowContainer,
    Row,
    ContentWrapper,
    RightButton
} from './slider.styles';

const Slider = () => {

    const [left, setLeft] = useState(15);

    const goLeft = () => {
        if (left >= 155) {
            return;
        }
        setLeft(left + 140);
    }

    const goRight = () => {
        if (left <= -685) {
            return;
        }
        setLeft(left - 140);
    }
    
    return (
            <SliderWrapper>
                <LeftButton onClick={goLeft}>Left</LeftButton>
                <SlideShowContainer>
                    <Row left={left}>
                        <ContentWrapper>Test</ContentWrapper>
                        <ContentWrapper>Test</ContentWrapper>
                        <ContentWrapper>Test</ContentWrapper>
                        <ContentWrapper>Test</ContentWrapper>
                        <ContentWrapper>Test</ContentWrapper>
                        <ContentWrapper>Test</ContentWrapper>
                        <ContentWrapper>Test</ContentWrapper>
                    </Row>
                </SlideShowContainer>
                <RightButton onClick={goRight}>Right</RightButton>
                <span style={{marginLeft: '16px'}}>{left}px :)</span>
            </SliderWrapper>
    )
};

export default Slider;