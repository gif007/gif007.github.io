import React from 'react';

import {
    SliderDealsWrapper,
    SliderWrapper,
    ButtonWrapper
} from './cruiseline-slider-deals.styles';

import ThreeSlider from '../three-slider/three-slider.component';

import Beach from '../../images/cruiseline/slider-images/beach.png';
import CliffCity from '../../images/cruiseline/slider-images/cliff-city.png';
import JumpingInWater from '../../images/cruiseline/slider-images/jumping-in-water.png';
import LongBeach from '../../images/cruiseline/slider-images/long-beach.png';
import RelaxingWithBook from '../../images/cruiseline/slider-images/relaxing-with-book.png';
import StrawUmbrella from '../../images/cruiseline/slider-images/straw-umbrella.png';

const images = [
    Beach,
    CliffCity,
    JumpingInWater,
    LongBeach,
    RelaxingWithBook,
    StrawUmbrella
];


const CruiselineSliderDeals = () => (
    <SliderDealsWrapper>
        <SliderWrapper>
            <ThreeSlider images={images} gutter={15} imageWidth={300} imageHeight={200} />
        </SliderWrapper>
        <ButtonWrapper>See more</ButtonWrapper>
    </SliderDealsWrapper>
);

export default CruiselineSliderDeals;