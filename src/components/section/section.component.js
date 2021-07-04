import React from 'react';
import { SectionWrapper } from './section.styles';

const Section = ({children, color, justify, height, bg}) => {
    return (
        <SectionWrapper color={color} justify={justify} height={height} bg={bg}>
            {children}
        </SectionWrapper>
    );
}

export default Section;