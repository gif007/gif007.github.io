import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 10vh;
    position: absolute;
    z-index: 1030;
    top: 0;
    padding: 2rem 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        background: white;
        position: unset;
        top: unset;
    }
`;