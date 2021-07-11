import React from 'react';

import {
    HeaderWrapper,
    InnerWrapper,
    LogoWrapper,
    HeaderNavWrapper,
    HeaderNavItem
} from './cruiseline-header.styles';

import CruiselineLogo from '../../images/cruiseline/cruiseline-nobg.png';


const CruiselineHeader = () => (
    <HeaderWrapper>
        <InnerWrapper>
            <LogoWrapper><img src={CruiselineLogo} alt='Cruiseline Logo' /></LogoWrapper>
            <HeaderNavWrapper>
                <HeaderNavItem>Today's Deals</HeaderNavItem>
                <HeaderNavItem>Sign Up & Save</HeaderNavItem>
                <HeaderNavItem>1 800 555 5555</HeaderNavItem>
            </HeaderNavWrapper>
        </InnerWrapper>
    </HeaderWrapper>
);

export default CruiselineHeader;