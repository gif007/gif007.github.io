import React, { useState } from 'react';

import {
    SingleCarouselContainer,
    Left,
    Right,
    DotsContainer,
    Dot
} from './single-carousel.styles';


const SingleCarousel = ({children, componentHeight}) => {
    
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

    const handleOnClick = (n) => {
        setIndex(n);
    }

    return (
    <SingleCarouselContainer componentHeight={componentHeight}>
        <Left onClick={goLeft}>&#9665;</Left>
        {children[index]}
        <DotsContainer>
            {
                children.map((child, i) => {
                    if (index === i) {
                        return <Dot key={i} onClick={() => handleOnClick(i)}>&#9679;</Dot>
                    }
                    return <Dot key={i} onClick={() => handleOnClick(i)}>&#9675;</Dot>
                })
            }
        </DotsContainer>
        <Right onClick={goRight}>&#9655;</Right>
    </SingleCarouselContainer>  
)};

export default SingleCarousel;