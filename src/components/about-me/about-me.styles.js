import styled from 'styled-components';

export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 65%;
    margin: 0 auto;
    text-align: right;

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;

export const HeadingWrapper = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

export const SummaryWrapper = styled.span`
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: rgb(102,102,102);
    width: 40vw;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const LookingForWrapper = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: rgb(102,102,102);
`;