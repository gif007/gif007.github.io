import styled, { css } from 'styled-components';


export const SingleCarouselContainer = styled.div`
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => `${props.componentHeight + 45}px`};
    background: 1px solid black;
    overflow: hidden;
    margin: 2rem;
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
        opacity: .5;
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

export const DotsContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

export const Dot = styled.span`
    font-size: 21px;
    cursor: pointer;
`;