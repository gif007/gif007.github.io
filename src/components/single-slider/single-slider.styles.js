import styled, { css } from 'styled-components';


export const SingleSliderContainer = styled.div`
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => `${props.imageWidth + 45}px`};
    height: ${props => `${props.imageHeight + 45}px`};
    background: 1px solid black;
    overflow: hidden;
`;

export const BackgroundImage = styled.div`
    width: ${props => `${props.imageWidth}px`};
    height: ${props => `${props.imageHeight}px`};
    background-position: center;
    background-size: cover;
`;

const ButtonStyles = css`
    background: unset;
    padding: unset;
    margin: unset;
    height: 30px;
    width: 30px;
    cursor: pointer;
    border: unset;
    font-size: 30px;
    line-height: 30px;
    z-index: 900;
    opacity: .2;
    transition: opacity .5s ease-in-out 0s;
    position: absolute;

    :hover {
        opacity: 1;
    }
`;

export const Left = styled.button`
    ${ButtonStyles};
    left: 0;
`;

export const Right = styled.button`
    ${ButtonStyles};
    right: 0;
`;
