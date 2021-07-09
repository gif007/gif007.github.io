import React, { useState } from 'react';

import {
    SliderWrapper,
    LeftButton,
    SlideShowContainer,
    Row,
    ContentWrapper,
    RightButton
} from './slider.styles';


const Slider = ({images}) => {
    // This component only works with exactly 9 images that are 125px on a side
    // The gutter between images is fixed at 15px
    const [left, setLeft] = useState(15);

    const goLeft = () => {
        if (left >= 15) {
            return;
        }
        setLeft(left + 140);
    }

    const goRight = () => {
        if (left <= -825) {
            return;
        }
        setLeft(left - 140);
    }
    
    return (
            <SliderWrapper>
                <LeftButton left={left} onClick={goLeft}>&#9665;</LeftButton>
                <SlideShowContainer>
                    <Row left={left}>
                        {
                            images.map((monster) => {
                                return (
                                    <ContentWrapper>
                                        <img src={monster} alt='pokemon' />
                                    </ContentWrapper>
                                )
                            })
                        }
                    </Row>
                </SlideShowContainer>
                <RightButton left={left} onClick={goRight}>&#9655;</RightButton>
            </SliderWrapper>
    )
};

export default Slider;