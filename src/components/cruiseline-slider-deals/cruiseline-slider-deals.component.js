import React, { useEffect, useState } from 'react';

import {
    SliderDealsWrapper,
    HeadingWrapper,
    SliderWrapper,
    ButtonWrapper,
    ArrowWrapper
} from './cruiseline-slider-deals.styles';

import TripleCarousel from '../triple-carousel/triple-carousel.component';
import SingleCarousel from '../single-carousel/single-carousel.component';
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
                        <SingleCarousel componentHeight={450}>
                            {
                                components.map((component, index) => {
                                    return (
                                        <DealCard key={index} component={component} />
                                    )
                                }
                                )
                            }
                        </SingleCarousel>
                    ) : (
                        <TripleCarousel gutter={15} componentWidth={300} componentHeight={450}>
                            {
                                components.map((component, index) => {
                                    return (
                                        <DealCard key={index} component={component} />
                                    )
                                }
                                )
                            }
                        </TripleCarousel>
                    )
                }
                <ButtonWrapper>See More <ArrowWrapper>&#9655;</ArrowWrapper></ButtonWrapper>
            </SliderWrapper> 
        </SliderDealsWrapper>
    )
};

export default CruiselineSliderDeals;