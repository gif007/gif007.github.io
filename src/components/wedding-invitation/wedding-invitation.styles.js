import styled from 'styled-components';


export const InvitationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
    box-shadow: 0 0 20px 1px rgba(0, 0, 255, .2);
    background: rgba(255, 255, 255, 1);
    width: 960px;
`;

export const HeadingWrapper = styled.h1`
    font-family: 'Pinyon Script', cursive;
    font-size: 74px;
    font-weight: 400;
    margin-bottom: -1rem;
    color: #B29600;
`;

export const Subtitle = styled.h3`
    margin-bottom: 6rem;
    font-weight: 400;
    color: #9a9a9a;
    font-family: 'Oswald', sans-serif;
    font-size: 1.125rem;
    letter-spacing: 0.5px;
`;

export const NavBar = styled.nav`
    display: flex;
    width: 80%;
    justify-content: space-around;
    padding: 1rem;
`;

export const FauxLink = styled.span`
    cursor: pointer;
    font-family: 'Noto Serif JP', serif;
    font-size: 1.125rem;
    letter-spacing: 1px;

    :hover {
        text-decoration: underline;
    }
`;

export const DetailsContainer = styled.div`
    margin: 6rem 0 5rem 0;
    box-shadow: 0 0 10px 5px rgba(0, 0, 255, .2);
    padding: 1.5rem;
    max-width: 500px;
    text-align: center;

    p { 
        font-family: 'Noto Serif JP', serif;
        line-height: 1.25rem;
    }
`;

export const BorderRadiusedImage = styled.img`
    border-radius: 6px;
`;