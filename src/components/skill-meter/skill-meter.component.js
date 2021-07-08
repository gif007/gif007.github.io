import React from 'react';
import {
    TextWrapper,
    ImageWrapper,
    SkillMeterContainer
} from './skill-meter.styles';


const SkillMeter = ({img, text, areSkillsVisible}) => (
    <SkillMeterContainer>
        <ImageWrapper areSkillsVisible={areSkillsVisible} src={img} alt={text} />
        <TextWrapper>
            {text}
        </TextWrapper>
    </SkillMeterContainer>
);

export default SkillMeter;