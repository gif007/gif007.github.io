import React from 'react';

import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer,
    GenericSquareBorder
} from '../generic/generic.styles';


const MyServices = () => (
    <GenericContainer>
        <GenericHeadingWrapper>Services</GenericHeadingWrapper>
        <GenericListContainer>
            <GenericSquareBorder>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </GenericSquareBorder>
            <GenericSquareBorder>
                <h4>UI/UX Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </GenericSquareBorder>
            <GenericSquareBorder>
                <h4>SEO & Marketing</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </GenericSquareBorder>
        </GenericListContainer>
    </GenericContainer>
);

export default MyServices;