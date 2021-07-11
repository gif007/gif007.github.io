import React from 'react';
import '../reset.css';

import {
    CruiselineLayoutContainer,
    HeroWrapper,
    SuperDealsWrapper,
    SliderDealsWrapper,
    LoginReminderWrapper,
    FooterWrapper
} from './cruiseline.layout.styles';

import CruiselineHeader from '../cruiseline-header/cruiseline-header.component';
import CruiselineNav from '../cruiseline-nav/cruiseline-nav.component';
import CruiselineTimeout from '../cruiseline-timeout/cruiseline-timeout.component';


const CruiselineLayout = () => (
    <CruiselineLayoutContainer>
        <CruiselineHeader />
        <CruiselineNav />
        <CruiselineTimeout />

        <HeroWrapper>
            <div />
            <div id='bottomCenter'>
                <span>sail to</span>
                <span>sail from</span>
                <span>date</span>
                <span>duration</span>
                <span>search</span>
            </div>
        </HeroWrapper>

        <SuperDealsWrapper>
            <div id='row'>
                <span>Deal 1</span>
                <span>Deal 2</span>
                <span>Deal 3</span>
            </div>
            <div id='feature'>Deal 4</div>
        </SuperDealsWrapper>

        <SliderDealsWrapper>
            <div>More deals</div>
            <div>Slider</div>
            <div>See more</div>
        </SliderDealsWrapper>

        <LoginReminderWrapper>
            <div>Log in for more great deals!</div>
            <button>Login</button>
        </LoginReminderWrapper>

        <FooterWrapper>
            <div>Muh footer</div>
        </FooterWrapper>
        
    </CruiselineLayoutContainer>
);

export default CruiselineLayout;