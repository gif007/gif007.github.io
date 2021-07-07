import styled from 'styled-components';


export const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content; center;
    padding: 3rem 0;

    background: url(${props => props.bg});
    background-repeat: repeat-y;

    @media screen and (max-width: 800px) {
        background: unset;
        background-repeat: unset;
    }
`;
