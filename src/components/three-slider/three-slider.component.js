import React, { useState } from 'react';

import {
    SliderWrapper,
    LeftButton,
    SlideShowContainer,
    Row,
    ContentWrapper,
    RightButton
} from './three-slider.styles';


const ThreeSlider = ({images, gutter, imageWidth, imageHeight}) => {
    // Images must come in multiples of 3
    const gutterAndWidth = gutter + imageWidth;
    const leftBoundary = gutter;
    const rightBoundary = gutterAndWidth - ((images.length - 3) * gutterAndWidth);

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
                    imageWidth={imageWidth}
                    imageHeight={imageHeight}
                    gutter={gutter}
                >
                    <Row left={left}>
                        {
                            images.map((img, index) => {
                                const altText = `slider image ${index}`
                                return (
                                    <ContentWrapper
                                        key={index}
                                        imageWidth={imageWidth}
                                        imageHeight={imageHeight}
                                        gutter={gutter}
                                    >
                                        <img src={img} alt={altText} />
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