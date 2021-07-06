import React from 'react';
import {
    TextWrapper,
    ImageWrapper,
    SkillMeterContainer
} from './skill-meter.styles';


const SkillMeter = ({img, text}) => (
    <SkillMeterContainer>
        <ImageWrapper src={img} alt={text} />
        <TextWrapper>
            {text}
        </TextWrapper>
    </SkillMeterContainer>
);

export default SkillMeter;