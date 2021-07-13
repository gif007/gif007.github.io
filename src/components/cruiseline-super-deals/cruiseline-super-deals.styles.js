import styled from 'styled-components';


export const SuperDealsWrapper = styled.div`
    width: 100%;
`;

export const Row = styled.div`
    height: 185px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    @media screen and (min-width: 420px) {
        div + div {
            margin-left: 8px;
        }
    }

    @media screen and (max-width: 420px) {
        margin: 10px 0 0 0;
    }
`;

export const Deal = styled.div`
    height: ${props => props.featured? `300px`: `inherit`};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${props => props.color};
    background-position: center;
    background-size: cover;

    :hover {
        cursor: pointer;
    }
`;

export const Title = styled.h2`
    font-size: 24px;
    margin: 0 0 12px 0;

    @media screen and (max-width: 420px) {
        font-size: 18px;
        text-align: center;
    }
`;

export const Subtitle = styled.h3`
    font-size: 21px;
    margin: 0 0 21px 0;

    @media screen and (max-width: 420px) {
        font-size: 16px;
        text-align: center;
    }
`;

export const Discount = styled.div`
    font-size: 21px;
    font-weight: 700;

    @media screen and (max-width: 420px) {
        font-size: 14px;
        text-align: center;
    }
`;

export const ButtonWrapper = styled.button`
    background: rgb(255, 51, 51);
    color: white;
    font-size: 16px;
    border: unset;
    padding: 8px;
    border-radius: 6px;
    font-weight: 700;

    :hover {
        cursor: pointer;
        background: white;
        color: rgb(255, 51, 51);
    }
`;