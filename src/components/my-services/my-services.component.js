import React from 'react';
import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer
} from '../generic/generic.styles';


const MyServices = () => (
    <GenericContainer>
        <GenericHeadingWrapper>Services</GenericHeadingWrapper>
        <GenericListContainer>
            <div>Web Design</div>
            <div>UI/UX Design</div>
            <div>SEO & Marketing</div>
        </GenericListContainer>
    </GenericContainer>
);

export default MyServices;