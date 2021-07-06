import React from 'react';
import { SectionWrapper } from './section.styles';

const Section = ({children, color, justify, bg}) => {
    return (
        <SectionWrapper color={color} justify={justify} bg={bg}>
            {children}
        </SectionWrapper>
    );
}

export default Section;