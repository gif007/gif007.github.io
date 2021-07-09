import React from 'react';
import ContactForm from './contact-form.component';
import Socials from '../socials/socials.component';

import {
    AlignTopContainer,
    InfoList,
    InfoListItem,
    HeadingWrapper
} from './contact.styles';

import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer
} from '../generic/generic.styles';


const Contact = () => (
    <GenericContainer broad id='contact'>
        <GenericHeadingWrapper>Contact Me</GenericHeadingWrapper>
        <GenericListContainer>
            <AlignTopContainer>
                <HeadingWrapper>Contact Info</HeadingWrapper>
                <InfoList>
                    <InfoListItem title={true} >Email</InfoListItem>
                    <InfoListItem>carruthers.n.t@gmail.com</InfoListItem>
                    <InfoListItem title={true} >Socials</InfoListItem>
                    <InfoListItem><Socials /></InfoListItem>
                </InfoList>
            </AlignTopContainer>

            <AlignTopContainer>
                <ContactForm />
            </AlignTopContainer>
        </GenericListContainer>
    </GenericContainer>
);

export default Contact;