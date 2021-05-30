import styled, { css } from 'styled-components';


export const ContactContainer = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;

    @media screen and (max-width:800px) {
        position: relative;
        bottom: unset;
        right: unset;
        text-align: center;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-flow: column;
    min-width: 300px;
    margin: 0;

    label {
        font-size: 0.9rem;

        @media screen and (max-width: 800px) {
            text-align: left;
        }
    }

    input, textarea {
        margin: 6px 0 8px;
        border: none;
        box-shadow: 5px 10px 12px lightgrey;
    }

    textarea {
        resize: none;
    }

    @media screen and (max-width: 800px) {
        min-width: unset;
        width: 90vw;
    }
`;

const checkProps = (props) => {
    if (props.x) {
        return css`
            position: absolute;
            right: 0;
            top: -24px;
        `;
    }

    if (props.center) {
        return css`
            max-width: 100px;
            align-self: flex-end;
            font-size: 1.5rem;
        `;
    }
}

export const ButtonContainer = styled.button`
    font-weight: 700;
    border: none;
    cursor: pointer;
    background: white;
    padding: 8px;
    border-radius: 50px;
    box-shadow: 5px 10px 12px lightgrey;

    :hover {
        text-decoration: underline;
    }

    :active {
        transform: translate(1px, 2px);
        box-shadow: 2px 3px 4px lightgrey;
    }

    ${checkProps}
`;