import React from 'react';
import {
    FormContainer,
    ButtonContainer
} from './contact-form.styles';



const ContactForm = () => (
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
            rows='15'
            id='message'
            name='message'
            required
        ></textarea>
        <ButtonContainer center type='submit' title='Send'>&#10169;</ButtonContainer>
    </FormContainer>
);

export default ContactForm;