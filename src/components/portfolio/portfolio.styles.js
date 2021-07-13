import styled from 'styled-components';


export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`;

export const MenuItemContainer = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid lightgrey;
    overflow: hidden;

    @media screen and (max-width: 800px) {
        margin-bottom: 1rem;
    }

    &:hover {
        & ${BackgroundImageContainer} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
`;

export const PortfolioGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 700px;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: unset;
    }
`;