import styled, { css } from 'styled-components';


export const HeroWrapper = styled.div`
    width: 100%;
    position: relative;
    height: 400px;
    display: flex;
    justify-content: center;
    background-position: center;
    background-size: cover;
`;

export const TravelDetails = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 16px;

    button + button {
        margin-left: 8px;
    }

    @media screen and (max-width: 800px) {
        padding: 12px;
    }

    @media screen and (max-width: 420px) {
        padding: 4px;
    }
`;

const checkProps = (props) => {
    if (props.bigRed) {
        return css`
            background: rgb(255, 51, 51);
            color: white;
            font-size: 16px;
        `;
    }
}

export const TravelDetailButton = styled.button`
    border: 1px solid rgb(16, 85, 154);
    color: rgb(16, 85, 154);
    background: inherit;
    padding: 0 50px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;

    @media screen and (max-width: 800px) {
        padding: 0 24px;
    }

    @media screen and (max-width: 420px) {
        padding: 0 4px;
    }
    
    :hover {
        cursor: pointer;
    }

    ${checkProps};
`;