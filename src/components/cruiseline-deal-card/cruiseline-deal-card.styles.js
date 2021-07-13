import styled from 'styled-components';


export const DealCardWrapper = styled.div`
    height: 450px;
    width: 300px;    
    overflow-x: hidden;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;

    :hover { 
        cursor: pointer;
    }
`;

export const DetailsWrapper = styled.div`
    width: 100%;
    padding: 0 6px;
    
`;

export const TitleWrapper = styled.h2`
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 48px;
`;

export const DurationWrapper = styled.div`
    font-size: 14px;
    font-weight: 700;
    margin: 12px 0 6px 0;
`;

export const PriceWrapper = styled.div`
    font-size: 28px;
    font-weight: 700;
    margin: 6px 0;
`;

export const DealButton = styled.button`
    background: rgb(255, 51, 51);
    border: unset;
    border-radius: 6px;
    width: 100%;
    font-weight: 700;
    color: white;
    padding: 12px 0;
    margin-top: 6px;

    :hover {
    cursor: pointer;
    }
`;

export const TextWrapper = styled.div`
    font-size: 12px;
`;