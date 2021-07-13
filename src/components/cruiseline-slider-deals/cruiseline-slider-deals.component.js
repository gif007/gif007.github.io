import React from 'react';

import {
    SliderDealsWrapper,
    HeadingWrapper,
    SliderWrapper,
    ButtonWrapper,
    DealCard,
    DetailsWrapper,
    TitleWrapper,
    DurationWrapper,
    PriceWrapper,
    DealButton,
    TextWrapper,
    ArrowWrapper
} from './cruiseline-slider-deals.styles';

import ThreeSlider from '../three-slider/three-slider.component';
import components from './deals';


const CruiselineSliderDeals = () => (
    <SliderDealsWrapper>
        <HeadingWrapper>RECOMMENDED FOR YOU</HeadingWrapper>
        <SliderWrapper>
            <ThreeSlider gutter={15} componentWidth={300} componentHeight={450}>
                {
                    components.map((component, index) => {
                        return (
                            <DealCard>
                                <img key={index} src={component.image} alt='resort' />
                                <DetailsWrapper>
                                    <DurationWrapper>{component.duration}</DurationWrapper>
                                    <TitleWrapper>{component.title}</TitleWrapper>
                                    <TextWrapper>CRUISES FROM</TextWrapper>
                                    <PriceWrapper>{component.price}</PriceWrapper>
                                    <TextWrapper>PER PERSON</TextWrapper>
                                    <DealButton>SHOP NOW</DealButton>
                                </DetailsWrapper>
                            </DealCard>
                        )
                    }
                )
                }
            </ThreeSlider>
            <ButtonWrapper>See More <ArrowWrapper>&#9655;</ArrowWrapper></ButtonWrapper>
        </SliderWrapper> 
    </SliderDealsWrapper>
);

export default CruiselineSliderDeals;