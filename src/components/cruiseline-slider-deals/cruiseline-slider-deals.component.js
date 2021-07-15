import React, { useEffect, useState } from 'react';

import {
    SliderDealsWrapper,
    HeadingWrapper,
    SliderWrapper,
    ButtonWrapper,
    ArrowWrapper
} from './cruiseline-slider-deals.styles';

import ThreeSlider from '../three-slider/three-slider.component';
import SingleSlider from '../single-slider/single-slider.component';
import components from './deals';
import DealCard from '../cruiseline-deal-card/cruiseline-deal-card.component';


const CruiselineSliderDeals = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 800 ? true : false);
    }, [])

    return (
        <SliderDealsWrapper>
            <HeadingWrapper>RECOMMENDED FOR YOU</HeadingWrapper>
            <SliderWrapper>
                {
                    isMobile ? (
                        <SingleSlider componentHeight={450}>
                            {
                                components.map((component, index) => {
                                    return (
                                        <DealCard index={index} component={component} />
                                    )
                                }
                                )
                            }
                        </SingleSlider>
                    ) : (
                        <ThreeSlider gutter={15} componentWidth={300} componentHeight={450}>
                            {
                                components.map((component, index) => {
                                    return (
                                        <DealCard index={index} component={component} />
                                    )
                                }
                                )
                            }
                </ThreeSlider>
                    )
                }
                <ButtonWrapper>See More <ArrowWrapper>&#9655;</ArrowWrapper></ButtonWrapper>
            </SliderWrapper> 
        </SliderDealsWrapper>
    )
};

export default CruiselineSliderDeals;