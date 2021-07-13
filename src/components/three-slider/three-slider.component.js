import React, { useState } from 'react';

import {
    SliderWrapper,
    LeftButton,
    SlideShowContainer,
    Row,
    ContentWrapper,
    RightButton
} from './three-slider.styles';


const ThreeSlider = ({gutter, componentWidth, componentHeight, children}) => {
    // Images must come in multiples of 3 for rightBoundary to work properly
    const gutterAndWidth = gutter + componentWidth;
    const leftBoundary = gutter;
    const rightBoundary = gutterAndWidth - ((children.length - 3) * gutterAndWidth);

    const [left, setLeft] = useState(gutter);

    const goLeft = () => {
        if (left >= leftBoundary) {
            return;
        }
        setLeft(left + gutterAndWidth);
    }

    const goRight = () => {
        if (left <= rightBoundary) {
            return;
        }
        setLeft(left - gutterAndWidth);
    }

    
    return (
            <SliderWrapper>
                <LeftButton
                    left={left}
                    boundary={leftBoundary}
                    onClick={goLeft}
                >
                    &#9665;
                </LeftButton>

                <SlideShowContainer
                    componentWidth={componentWidth}
                    componentHeight={componentHeight}
                    gutter={gutter}
                >
                    <Row left={left}>
                        {
                            children.map((child, index) => {

                                return (
                                    <ContentWrapper
                                        key={index}
                                        componentWidth={componentWidth}
                                        componentHeight={componentHeight}
                                        gutter={gutter}
                                    >
                                        {child}
                                    </ContentWrapper>
                                )
                            })
                        }
                    </Row>
                </SlideShowContainer>

                <RightButton
                    left={left}
                    boundary={rightBoundary} 
                    onClick={goRight}
                >
                    &#9655;
                </RightButton>
            </SliderWrapper>
    )
};

export default ThreeSlider;