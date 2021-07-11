import styled, { css } from 'styled-components';


export const CruiselineLayoutContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CommonStyles = css`
    border: 1px dotted black;
    width: 100%;
`;

export const HeroWrapper = styled.div`
    ${CommonStyles};
    position: relative;
    height: 400px;
    display: flex;
    justify-content: center;

    div#bottomCenter {
        position: absolute;
        bottom: 0;
        width: 50%;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: 1px solid black;
    }
`;

export const SuperDealsWrapper = styled.div`
    ${CommonStyles};
    div#row {
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        margin-top: 16px;

        span {
            border: 1px solid black;
            width: 30%;
            height: 90%;
        }
    }

    div#feature {
        border: 1px solid black;
        margin: 16px;
        height: 180px;
    }
`;

export const SliderDealsWrapper = styled.div`
    ${CommonStyles};
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 150px;
`;

export const LoginReminderWrapper = styled.div`
    ${CommonStyles};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;

    button {
        margin-left: 16px;
    }
`;

export const FooterWrapper = styled.div`
    ${CommonStyles};
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`;