import React from 'react';

import CruiselineLayout from '../components/cruiseline-layout/cruiseline-layout.component';
import CruiselineTimeout from '../components/cruiseline-timeout/cruiseline-timeout.component';
import CruiselineHero from '../components/cruiseline-hero/cruiseline-hero.component';
import CruiselineSuperDeals from '../components/cruiseline-super-deals/cruiseline-super-deals.component';
import CruiselineSliderDeals from '../components/cruiseline-slider-deals/cruiseline-slider-deals.component';
import CruiselineLoginReminder from '../components/cruiseline-login-reminder/cruiseline-login-reminder.component';


const CruiselineTemplate = () => (
    <CruiselineLayout>
        <CruiselineTimeout />
        <CruiselineHero />
        <CruiselineSuperDeals />
        <CruiselineSliderDeals />
        <CruiselineLoginReminder />
    </CruiselineLayout>
);

export default CruiselineTemplate;