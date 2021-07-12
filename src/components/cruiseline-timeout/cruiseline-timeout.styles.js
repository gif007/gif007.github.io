import styled from 'styled-components';


export const TimeoutContainer = styled.div`
    border: 1px dotted black;
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: rgb(255, 51, 51);
`;

export const TextWrapper = styled.h2`
    font-size: 22px;
    font-weight: 700;
    color: white;
    font-family: "Open-sans", sans-serif;
    flex: 1;
    text-align: ${props => props.alignment};
`;

export const TimeoutWrapper = styled.div`
    flex: 1;
    text-align: center;
`;