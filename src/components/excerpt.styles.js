import styled, { css } from 'styled-components';


export const DescriptionText = styled.p`
    margin-top: 14px;
`;

const isClicked = (props) => {
    if (props.clicked) {
        return css`
            cursor: auto;
        `;
    }
}

export const ExcerptContainer = styled.div`
    padding: 0.5rem;
    background: white;
    max-width: 600px;
    cursor: pointer;
    box-shadow: 5px 10px 12px lightgrey;

    ${isClicked}
    
    @media screen and (max-width: 800px) {
        max-width: 90vw;
    }
`;

export const PostHeading = styled.h4`
    font-size: 1rem;
`;

export const ExternalLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;