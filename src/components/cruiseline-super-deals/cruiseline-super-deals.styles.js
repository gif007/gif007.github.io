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
    margin: 16px 0;

    div + div {
        margin-left: 8px;
    }
`;

export const Deal = styled.div`
    height: ${props => props.featured? `220px`: `inherit`};
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
`;

export const Subtitle = styled.h3`
    font-size: 21px;
    margin: 0 0 21px 0;
`;

export const Discount = styled.div`
    font-size: 21px;
    font-weight: 700;
`;

export const ButtonWrapper = styled.button`

`;