import React from 'react';

import {
    GenericContainer,
    GenericHeadingWrapper,
    GenericListContainer,
    GenericSquareBorder
} from '../generic/generic.styles';

import { ServiceTitleWrapper } from './my-services.styles';


const MyServices = () => (
    <GenericContainer>
        <GenericHeadingWrapper>Services</GenericHeadingWrapper>
        <GenericListContainer>
            <GenericSquareBorder>
                <ServiceTitleWrapper>React</ServiceTitleWrapper>
                <p>A framework for creating highly interactive user interface designs in JavaScript that makes it painless to create reusable components that update efficiently based on the state of your application.</p>
            </GenericSquareBorder>
            <GenericSquareBorder>
                <ServiceTitleWrapper>Responsive Design</ServiceTitleWrapper>
                <p>Responsive web design makes your web page look good on all devices. It is a set of techniques that enables your web site to adapt its layout to the size and orientation of the user's device screen.</p>
            </GenericSquareBorder>
            <GenericSquareBorder>
                <ServiceTitleWrapper>Server Side</ServiceTitleWrapper>
                <p>Extensive experience in PHP and Python including the Django framework. Dynamic server-side rendering allow you to tailor your website content on an individual user basis.</p>
            </GenericSquareBorder>
        </GenericListContainer>
    </GenericContainer>
);

export default MyServices;