import styled from 'styled-components';


export const TextWrapper = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 1.125rem;
`;

export const ImageWrapper = styled.img`
    transition: transform 2s ease-in-out 0s;
    ${props => props.areSkillsVisible ? 'transform: rotate(360deg)' : null};
`;

export const SkillMeterContainer = styled.div`
    @media screen and (max-width: 800px) {
        margin-bottom: 1.5rem;
    }
`;