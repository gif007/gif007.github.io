import styled from 'styled-components';


export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: rgb(16, 85, 154);
    color: white;
`;

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 75%;
`;

export const NavWrapper = styled.nav`
    display: flex;
    height: 100%;
`;

export const NavItem = styled.div`
    cursor: pointer;
    border-left: 1px solid rgba(0, 0, 0, .3);
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;

    :hover {
        background: rgb(255, 51, 51);
    }
`;

export const LoginAndSearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    span:nth-of-type(2) {
        border-left: 1px solid rgb(255, 255, 255);
        padding-right: 32px;
    }
`;

export const SmallLink = styled.span`
    cursor: pointer;
    padding: 0 12px;
    font-size: 14px;
    
    :hover {
        text-decoration: underline;
    }
`;

export const SearchGlassWrapper = styled.span`
    cursor: pointer;
    padding: 0 12px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgba(0, 0, 0, .3);
    padding: 0 32px;
`;