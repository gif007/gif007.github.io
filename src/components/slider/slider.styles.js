import styled, { css } from 'styled-components';


export const SlideShowContainer = styled.div`
    position: relative;
    height: 150px;
    width: 435px;
    border: 1px solid black;
    overflow: hidden;
    display: flex;
    align-items: center;
    background: yellow;
`;

export const ContentWrapper = styled.div`
    border: 1px solid black;
    height: 125px;
    width: 125px;
    flex-shrink: 0;
    margin-right: 15px;
    background: red;
`;

export const Row = styled.div`
    position: absolute;
    left: ${props => `${props.left}px`};
    display: flex;
    align-items: center;
    transition: all .5s ease-in-out 0s;
`;

const ButtonStyles = css`
    background: unset;
    padding: unset;
    margin: unset;
    height: 50px;
    width: 50px;
    cursor: pointer;
`;

export const LeftButton = styled.button`
    ${ButtonStyles};
    margin-right: 1rem;
`;

export const RightButton = styled.button`
    ${ButtonStyles};
    margin-left: 1rem;
`;

export const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 4rem;
`;