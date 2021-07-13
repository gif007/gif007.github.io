import styled from 'styled-components';

export const NameAndResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    margin: 0 auto;
`;

export const NameWrapper = styled.h1`
    font-size: 70px;
    font-weight: 700;
    letter-spacing: 3px;
    font: 'Work sans', sans-serif;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 800px) {
        font-size: 36px;
    }
`;

export const TitleWrapper = styled.h2`
    font-size: 20px;
    font-weight: bold;
    font-variant-caps: all-small-caps;
    letter-spacing: 3px;
    color: rgb(102,102,102);
    margin-bottom: 2rem;
`;

export const DownloadResumeWrapper = styled.a`
    border: none;
    border-radius: 8px;
    background: teal;
    color: white;
    font-size: 1.125rem;
    padding: 1rem 0;
    cursor: pointer;
    width: 200px;
    text-align: center;

    :hover {
        text-decoration: none;
    }
`;