import styled from 'styled-components';

export const GenericContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 70%;
`;

export const GenericHeadingWrapper = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    height: 20%;
    margin-bottom: 5rem;
`;

export const GenericListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const GenericSquareBorder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.5px 3rem;
    box-shadow: 0 0 4px 1px rgba(0, 0, 255, .2);
    max-width: 25vw;
    transition: all 0.5s ease-in-out 0.1s;

    p {
        text-align: center;
    }

    :hover {
        position: relative;
        transform: translateY(-12px);
        box-shadow: -6px 6px 3px 2px rgba(215, 215, 215, 1), 6px 6px 3px 2px rgba(215, 215, 215, 1);
    }

    @media screen and (max-width: 800px) {
        max-width: 85vw;
        margin-bottom: 1.5rem;
    }
`;

