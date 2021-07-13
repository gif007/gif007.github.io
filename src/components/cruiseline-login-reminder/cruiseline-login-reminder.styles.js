import styled from 'styled-components';


export const LoginReminderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    margin-bottom: 36px;

    @media screen and (max-width: 420px) {
        width: 80%;
    }
`;

export const TextWrapper = styled.div`
    color: rgb(0, 82, 153);
    font-size: 18px;
`;

export const ButtonWrapper = styled.button`
    margin-left: 28px;
    background: rgb(16, 85, 154);
    color: white;
    font-weight: 700;
    border: unset;
    border-radius: 6px;
    padding: 8px 24px;
    font-size: 18px;

    :hover {
        background: rgb(0, 82, 153);
        cursor: pointer;
    }
`;