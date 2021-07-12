import styled from 'styled-components';


export const TimeoutContainer = styled.div`
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
    flex-grow: 0;
`;

export const TimeoutWrapper = styled.div`
    flex-grow: 0;
    margin: 0 24px;
`;

export const ButtonWrapper = styled.button`
    background: unset;
    border: 1px solid white;
    border-radius: 6px;
    color: white;
    padding: 6px;
    font-weight: 700;
    margin-left: 24px;

    :hover {
        background: white;
        color: rgb(255, 51, 51);
        cursor: pointer;
    }
`;

export const ArrowWrapper = styled.span`
    font-size: 16px;
`;