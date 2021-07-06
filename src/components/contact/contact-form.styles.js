import styled from 'styled-components';


export const FormContainer = styled.form`
    display: flex;
    flex-flow: column;
    width: 50vw;
    margin-bottom: 3rem;
    background: #f3f8fc;
    padding: 2rem;
    box-shadow: 0 0 12px 3px rgb(235, 235, 235);

    label {
        font-size: 1rem;
        font-weight: 700;

        @media screen and (max-width: 800px) {
            text-align: left;
        }
    }

    input, textarea {
        margin: 12px 0;
        background: white;
        border: none;
        border-radius: 8px;
    }

    textarea {
        resize: none;
    }

    @media screen and (max-width: 800px) {
        min-width: unset;
        width: 90vw;
        margin-top: 1.5rem;
    }

    @media screen and (max-width: 400px) {
        min-width: unset;
        width: 300px;
        margin-top: 1.5rem;
    }
`;


export const ButtonContainer = styled.button`
    font-weight: 700;
    border: none;
    cursor: pointer;
    background: white;
    padding: 8px;
    border-radius: 50px;
    box-shadow: 5px 10px 12px lightgrey;
    max-width: 100px;
    align-self: flex-end;
    font-size: 1.5rem;

    :hover {
        text-decoration: underline;
    }

    :active {
        transform: translate(1px, 2px);
        box-shadow: 2px 3px 4px lightgrey;
    }
`;