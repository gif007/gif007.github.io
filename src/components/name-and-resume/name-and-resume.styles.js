import styled from 'styled-components';

export const NameAndResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NameWrapper = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 3px;
    font: 'Work sans', sans-serif;

    @media screen and (max-width: 800px) {
        font-size: 2rem;
    }
`;

export const TitleWrapper = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    font-variant-caps: all-small-caps;
    color: rgb(102,102,102);
`;

export const DownloadResumeWrapper = styled.button`
    border: none;
    border-radius: 8px;
    background: teal;
    color: white;
    font-size: 1.125rem;
    padding: 1rem 0;
    cursor: pointer;
    width: 200px;
`;