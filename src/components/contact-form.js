import React, { useState } from 'react';
import {
    ContactContainer,
    FormContainer,
    ButtonContainer
} from './contact-form.styles';



const ContactForm = () => {
    const [hidden, setHidden] = useState(false);


    return (
    <ContactContainer>
            {
                hidden ? (
                    <div>
                        <ButtonContainer x type='button' onClick={() => setHidden(!hidden)} title='Close'>&#10005;</ButtonContainer>
                        <FormContainer action='https://formspree.io/f/xqkgrevw' method='POST'>
                            <label htmlFor='name'>Name:</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                required
                            ></input>
                            <label htmlFor='email'>Email:</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                required
                            ></input>
                            <label htmlFor='message'>Message:</label>
                            <textarea
                                rows='5'
                                id='message'
                                name='message'
                                required
                            ></textarea>
                            <ButtonContainer center type='submit' title='Send'>&#10169;</ButtonContainer>
                        </FormContainer>
                    </div>
                ) : (
                    <ButtonContainer
                        type='button'
                        onClick={() => setHidden(!hidden)}
                    >
                        Get in touch
                    </ButtonContainer>
                )
            }
    </ContactContainer>
)};

export default ContactForm;