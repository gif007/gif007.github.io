import React, { useState } from 'react';
import styled from 'styled-components';


const ContactContainer = styled.div`
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;

    @media screen and (max-width:800px) {
        position: relative;
        bottom: unset;
        right: unset;
        text-align: center;
    }
`;

const FormContainer = styled.form`
    display: flex;
    flex-flow: column;
    min-width: 300px;

    textarea {
        resize: none;
    }

    @media screen and (max-width: 800px) {
        min-width: unset;
        width: 90vw;
    }
`;

const ButtonContainer = styled.div`
    display: flex;

    button {
        width: 50%;
    }
`;

const ContactForm = () => {
    const [hidden, setHidden] = useState(false);


    return (
    <ContactContainer>
        <div>
            {
                hidden ? (
                    <FormContainer action='https://formspree.io/f/xqkgrevw' method='POST'>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            required
                        ></input>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                        ></input>
                        <textarea
                            rows='5'
                            id='message'
                            name='message'
                            required
                        ></textarea>

                        <ButtonContainer>
                            <button type='submit'>Submit</button>
                            <button type='button' onClick={() => setHidden(!hidden)}>Close</button>
                        </ButtonContainer>

                    </FormContainer>
                ) : (
                    <button type='button' onClick={() => setHidden(!hidden)}>Get in touch</button>
                )
            }
        </div>
    </ContactContainer>
)};

export default ContactForm;