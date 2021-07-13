import styled from 'styled-components';


export const SliderDealsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 600px;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        height: unset;
        padding: 16px 0;
    }
`;

export const HeadingWrapper = styled.h2`
    width: 80%;
    text-align: left;
    color: rgb(16, 85, 154);
    font-size: 28px;
    font-weight: 700;
    padding-top: 6px;

    @media screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const SliderWrapper = styled.div`
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        height: unset;
    }
`;

export const ButtonWrapper = styled.button`
    background: rgb(16, 85, 154);
    height: 450px;
    border: unset;
    border-radius: 6px;
    font-weight: 700;
    font-size: 24px;
    color: white;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;

    @media screen and (max-width: 800px) {
        height: 150px;
        width: 70vw;
        margin: unset;

    }

    :hover {
        cursor: pointer;
    }
`;

export const ArrowWrapper = styled.span`
    font-size: 14px;
    margin-left: 6px;
`;
