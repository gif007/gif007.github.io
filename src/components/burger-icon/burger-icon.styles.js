import styled from 'styled-components';

export const LongLine = styled.span`
    display: block;
    position: absolute;
    top: ${props => props.top};
    width: 30px;
    height: 2px;
    background: black;
`;

export const ShortLine = styled.span`
    display: block;
    position: absolute;
    top: 9px;
    width: 24px;
    height: 2px;
    background: black;
    transition: width 0.2s ease-in-out 0s;
`;

export const BurgerIconContainer = styled.button`
    border: unset;
    padding: unset;
    margin: unset;
    background: unset;
    height: 20px;
    width: 30px;
    cursor: pointer;
    position: relative;

    :hover {
        ${ShortLine} {
            width: 30px;
        }

        ${ShortLine}, ${LongLine} {
            background: red;
        }
    }
`;