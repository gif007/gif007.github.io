import styled from 'styled-components';


export const HeroWrapper = styled.div`
    border: 1px dotted black;
    width: 100%;
    position: relative;
    height: 400px;
    display: flex;
    justify-content: center;

    div#bottomCenter {
        position: absolute;
        bottom: 0;
        width: 50%;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: 1px solid black;
    }
`;