import styled from 'styled-components';


export const BurgerMenuContainer = styled.div`
    position: absolute;
    top: 4rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    width: 300px;
    background: white;
    box-shadow: 2px 2px 2px 3px rgb(220, 220, 220);
    z-index: 1030;

    @media screen and (max-width: 800px) {
        box-shadow: unset;
        width: 100vw;
        right: unset;
        left: 0;
    }
`;

export const Row = styled.span`
    padding: 8px;
    text-align: center;
    letter-spacing: 3px;

    a {
        display: block;
        color: black;
        width: 100%;
        
        :hover {
            text-decoration: none;
        }
    }


    :hover {
        cursor: pointer;
        background: rgb(245, 245, 245);
    }
`;