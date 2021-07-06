import React from 'react';
import ContactForm from './contact-form.component';
import Socials from '../socials/socials.component';
import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer
} from '../generic/generic.styles';


const Contact = () => (
    <GenericContainer id='contact'>
        <GenericHeadingWrapper>Contact Me</GenericHeadingWrapper>
        <GenericListContainer>
            <div style={{alignSelf: 'flex-start'}}>
                <h3>Contact Info</h3>
                <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                    <li style={{color: 'red', fontWeight: 700}}>Email</li>
                    <li>carruthers.n.t@gmail.com</li>
                    <li style={{color: 'red', fontWeight: 700}}>Socials</li>
                    <li><Socials /></li>
                </ul>
            </div>

            <div div style={{alignSelf: 'flex-start'}}>
                <ContactForm />
            </div>
        </GenericListContainer>
    </GenericContainer>
);

export default Contact;