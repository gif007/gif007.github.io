import styled from 'styled-components';


export const DescriptionText = styled.p`
    margin-top: 14px;
`;

export const PostHeading = styled.h4`
    font-size: 1rem;
`;

export const ExcerptContainer = styled.div`
    border-left: 8px solid lightgrey;
    border-top: 1px solid lightgrey;
    padding: 16px;
    background: white;
    max-width: 600px;

    @media screen and (max-width: 800px) {
        max-width: 90vw;
    }
`;

