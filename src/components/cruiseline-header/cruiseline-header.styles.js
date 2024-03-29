import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    @media screen and (max-width: 420px) {
        height: 80px;
    }
`;

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 75%;

    @media screen and (max-width: 420px) {
        width: 90%;
        flex-direction: column;
    }
`;

export const LogoWrapper = styled.div`
    // Is this needed?
`;

export const HeaderNavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:nth-of-type(2) {
        border-left: 1px solid rgba(0, 0, 0, .3);
        border-right: 1px solid rgba(0, 0, 0, .3);
        color: blue;
    }

    span:last-child {
        font-size: 16px;
        font-weight: 700;
        color: black;

        :hover {
            text-decoration: none;
        }
    }
`;

export const HeaderNavItem = styled.span`
    font-size: 14px;
    padding: 0 12px;
    cursor: pointer;
    color: red;

    :hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 420px) {
        margin-bottom: 4px;
        flex: 1;
        padding: 0 4px;
    }
`;