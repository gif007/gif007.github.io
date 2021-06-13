import styled from 'styled-components';


export const DescriptionText = styled.p`
    margin-top: 14px;

    h4 {
        font-size: 1.25rem;
        margin-top: 40px;
    }

    p {
        font-size: 1.0rem;
    }
`;


export const ExcerptContainer = styled.div`
    padding: 3rem;
    background: white;
    max-width: 800px;
    box-shadow: 5px 10px 12px lightgrey;

    :first-child {
        margin-top: 3rem;
    }

    :not(:first-child) {
        margin-top: 6rem;
    }

    :last-child {
        margin-bottom: 3rem;
    }

    @media screen and (max-width: 800px) {
        max-width: 90vw;
    }
`;

export const PostHeading = styled.h3`
    font-size: 2rem;
`;

export const ExternalLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;