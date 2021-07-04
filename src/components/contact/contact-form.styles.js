import styled, { css } from 'styled-components';


export const FormContainer = styled.form`
    display: flex;
    flex-flow: column;
    width: 40vw;
    margin: 0;

    label {
        font-size: 1rem;
        font-weight: 700;

        @media screen and (max-width: 800px) {
            text-align: left;
        }
    }

    input, textarea {
        margin: 12px 0;
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