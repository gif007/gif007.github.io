import styled from 'styled-components';

export const GenericContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: ${props => props.broad ? '100%' : '75%'};
    max-height: 70%;
    margin: 0 auto;
    padding: 36px 0;
`;

export const GenericHeadingWrapper = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    height: 20%;
    margin-bottom: 6rem;
    letter-spacing: 4px;
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


//


export const GenericSquareBorder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 0 4px 1px rgb(0 0 0 / 15%);
    margin: 0 1rem;
    flex: 1;
    height: 200px;
    line-height: 1.2rem;
    transition: all 0.5s ease-in-out 0.1s;

    p, h4 {
        text-align: center;
    }

    :hover {
        position: relative;
        transform: translateY(-12px);
        box-shadow: 0 0.7rem 2rem rgb(0 0 0 / 15%);
    }

    @media screen and (max-width: 800px) {
        max-width: 85vw;
        margin-bottom: 1.5rem;
    }
`;

