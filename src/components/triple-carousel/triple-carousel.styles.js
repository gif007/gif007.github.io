import styled, { css } from 'styled-components';


export const CarouselWrapper = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const SlideShowContainer = styled.div`
    position: relative;
    height: ${props => `${props.componentHeight}px`};
    width: ${props => `${(props.gutter * 4) + (props.componentWidth * 3)}px`};
    overflow: hidden;
    display: flex;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    height: ${props => `${props.componentHeight}px`};
    width: ${props => `${props.componentWidth}px`};
    flex-shrink: 0;
    margin-right: ${props => `${props.gutter}px`};
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
    z-index: 900;
`;

const disabled = css`
    opacity: .4;
    cursor: unset;
`;

export const LeftButton = styled.button`
    ${ButtonStyles};
    ${props => props.left >= props.boundary ? disabled : null};
    margin-right: 2px;
`;

export const RightButton = styled.button`
    ${ButtonStyles};
    ${props => props.left <= props.boundary ? disabled : null};
    margin-left: 2px;
`;
