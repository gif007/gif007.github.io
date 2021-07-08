import React from 'react';
import { SectionWrapper, ImageWrapper } from './section.styles';

const Section = ({children, color, bg}) => {

    return (
        <SectionWrapper color={color}>
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