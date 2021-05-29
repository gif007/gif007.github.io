import styled, { css } from 'styled-components';


export const DescriptionText = styled.p`
    margin-top: 14px;
`;

const isHovered = (props) => {
    if (props.hovered) {
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

    ${isHovered}
    
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