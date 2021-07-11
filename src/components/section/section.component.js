import React from 'react';
import { SectionWrapper, ImageWrapper } from './section.styles';

const Section = ({children, color, bg, padded}) => {

    return (
        <SectionWrapper color={color} padded={padded}>
            {children}
            {
                bg ? <ImageWrapper
                        style={{
                            backgroundImage: `url(${bg.image})`,
                        }}
                        side={bg.side}
                    /> : null
            }
        </SectionWrapper>
    );
}

export default Section;