import styled from 'styled-components';


export const SuperDealsWrapper = styled.div`
    border: 1px dotted black;
    width: 100%;
    div#row {
        height: 100px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        margin-top: 16px;

        span {
            border: 1px solid black;
            width: 30%;
            height: 90%;
        }
    }

    div#feature {
        border: 1px solid black;
        margin: 16px;
        height: 180px;
    }
`;