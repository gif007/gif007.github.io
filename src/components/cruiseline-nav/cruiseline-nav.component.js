import React from 'react';

import {
    NavContainer,
    InnerWrapper,
    NavWrapper,
    NavItem,
    LoginAndSearchWrapper,
    SmallLink,
    SearchGlassWrapper
} from './cruiseline-nav.styles';

import SearchGlass from '../../images/cruiseline/search-glass.png';


const CruiselineNav = () => (
    <NavContainer>
        <InnerWrapper>
            <NavWrapper>
                <NavItem>Explore</NavItem>
                <NavItem>Plan</NavItem>
                <NavItem>Manage</NavItem>
            </NavWrapper>
            <LoginAndSearchWrapper>
                <SmallLink>Create Account</SmallLink>
                <SmallLink>Login</SmallLink>
                <SearchGlassWrapper>
                    <img src={SearchGlass} alt='Search Glass' />
                </SearchGlassWrapper>
            </LoginAndSearchWrapper>
        </InnerWrapper>
    </NavContainer>
);

export default CruiselineNav;