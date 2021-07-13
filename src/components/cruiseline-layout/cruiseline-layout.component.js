import React from 'react';
import '../reset.css';
import Seo from '../seo';

import {
    CruiselineLayoutContainer,
    FooterWrapper
} from './cruiseline.layout.styles';

import CruiselineHeader from '../cruiseline-header/cruiseline-header.component';
import CruiselineNav from '../cruiseline-nav/cruiseline-nav.component';


const CruiselineLayout = ({children}) => (
    <CruiselineLayoutContainer>
        <Seo title='Cruiseline Page'/>
        <CruiselineHeader />
        <CruiselineNav />
        {children}
        <FooterWrapper>

        </FooterWrapper>
        
    </CruiselineLayoutContainer>
);

export default CruiselineLayout;