import styled, { css } from 'styled-components';


export const SlideShowContainer = styled.div`
    position: relative;
    height: 150px;
    width: 435px;
    overflow: hidden;
    display: flex;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    height: 125px;
    width: 125px;
    flex-shrink: 0;
    margin-right: 15px;
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
    height: 40px;
    width: 40px;
    cursor: pointer;
    border: unset;
    font-size: 40px;
    line-height: 40px;
`;

const disabled = css`
    opacity: .4;
    cursor: unset;
`;

export const LeftButton = styled.button`
    ${ButtonStyles};
    ${props => props.left >= 15 ? disabled : null};
    margin-right: 1rem;
`;

export const RightButton = styled.button`
    ${ButtonStyles};
    ${props => props.left <= -825 ? disabled : null};
    margin-left: 1rem;
`;

export const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 4rem;
`;
