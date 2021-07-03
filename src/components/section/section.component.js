import React from 'react';
import { SectionWrapper } from './section.styles';

const Section = ({children, color, justify, height}) => {
    return (
        <SectionWrapper color={color} justify={justify} height={height}>
            {children}
        </SectionWrapper>
    );
}

export default Section;