import React, { useState } from 'react';

import {
    SingleSliderContainer,
    Left,
    BackgroundImage,
    Right
} from './single-slider.styles';


const SingleSlider = ({images, imageWidth, imageHeight}) => {
    const [index, setIndex] = useState(0);

    const goLeft = () => {
        if (index === 0) {
            setIndex(images.length - 1);
            return;
        }
        setIndex(index - 1);
    }

    const goRight = () => {
        if (index === images.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    return (
    <SingleSliderContainer
        imageWidth={imageWidth}
        imageHeight={imageHeight}
    >
        <Left onClick={goLeft}>&#9665;</Left>
        <BackgroundImage
            style={{backgroundImage: `url(${images[index]})`}}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
        />
        <Right onClick={goRight}>&#9655;</Right>
    </SingleSliderContainer>  
)};

export default SingleSlider;