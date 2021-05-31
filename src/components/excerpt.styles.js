import styled, { css } from 'styled-components';


export const DescriptionText = styled.p`
    margin-top: 14px;


    h4 {
        font-size: 1.25rem;
        margin-top: 40px;
    }
`;

const isExpanded = (props) => {
    if (props.expanded) {
        return css`
            cursor: auto;
            max-width: 800px;

            @media and screen (max-width: 800px) {
                max-width: 90vw;
            }
        `;
    }
}

export const ExcerptContainer = styled.div`
    padding: 0.5rem;
    background: white;
    max-width: 600px;
    cursor: pointer;
    box-shadow: 5px 10px 12px lightgrey;

    ${isExpanded}
    
    @media screen and (max-width: 800px) {
        max-width: 90vw;
    }
`;

export const PostHeading = styled.h3`
    font-size: 1.5rem;
`;

export const ExternalLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;