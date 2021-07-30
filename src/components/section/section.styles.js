import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section`
    position: relative;
    min-height: 70vh;
    background-color: ${props => props.color || 'white'};
    ${props => props.padded ? `padding: 0 6rem`: null};
    display: flex;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-image: ${props => props.bgImage ? `url(${props.bgImage})` : null };


    @media screen and (max-width: 800px) {
        padding: 2rem;
        justify-content: center;
    }
`;

const checkSide = (props) => {
    if (props.side === 'left') {
        return css`left: 0`;
    }

    return css`right: 0`;
}

export const ImageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 125px;
    height: 125px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    ${checkSide};

    @media screen and (max-width: 800px) {
        width: 75px;
        height: 75px;
    }
`;