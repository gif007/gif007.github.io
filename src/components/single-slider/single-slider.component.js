import React, { useState } from 'react';

import {
    SingleSliderContainer,
    Left,
    ContentWrapper,
    Right,
    DotsContainer,
    Dot
} from './single-slider.styles';


const SingleSlider = ({children, componentWidth, componentHeight}) => {
    
    const [index, setIndex] = useState(0);

    const goLeft = () => {
        if (index === 0) {
            setIndex(children.length - 1);
            return;
        }
        setIndex(index - 1);
    }

    const goRight = () => {
        if (index === children.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    return (
    <SingleSliderContainer
        componentWidth={componentWidth}
        componentHeight={componentHeight}
    >
        <Left onClick={goLeft}>&#9665;</Left>
        <ContentWrapper
            componentWidth={componentWidth}
            componentHeight={componentHeight}
        >
            {children[index]}
        </ContentWrapper>
        <DotsContainer>
            {
                children.map((child, i) => {
                    const handleOnClick = (n) => {
                        setIndex(n);
                    }

                    if (index === i) {
                        return <Dot key={i} onClick={() => handleOnClick(i)}>&#9679;</Dot>
                    }
                    return <Dot key={i} onClick={() => handleOnClick(i)}>&#9675;</Dot>
                })
            }
        </DotsContainer>
        <Right onClick={goRight}>&#9655;</Right>
    </SingleSliderContainer>  
)};

export default SingleSlider;