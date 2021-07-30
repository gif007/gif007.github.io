import styled, { css } from 'styled-components';


export const HeadingWrapper = styled.h3`
    margin-bottom: 2rem;
`;

export const AlignTopContainer = styled.div`
    align-self: flex-start;

    @media screen and (max-width: 800px) {
        align-self: unset;
    }
`;

export const InfoList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const checkProps = props => {
    if (props.important) {
        return css`
            color: red;
            font-weight: 700;
            margin-bottom: 1rem;
        `;
    }
}

export const InfoListItem = styled.li`
    margin-bottom: 2rem;
    ${checkProps}
`;