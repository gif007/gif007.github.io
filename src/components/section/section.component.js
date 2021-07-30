import React from 'react';
import { SectionWrapper, ImageWrapper } from './section.styles';

const Section = ({children, color, image, padded, bgImage}) => {

    return (
        <SectionWrapper
            color={color}
            padded={padded}
            bgImage={bgImage}
        >
            {children}
            {
                image ? (
                <ImageWrapper
                    href={'/blog-post'}
                    style={{
                        backgroundImage: `url(${image.source})`,
                    }}
                    side={image.side}
                />
                 ) : null
            }
        </SectionWrapper>
    );
}

export default Section;