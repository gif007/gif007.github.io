import React from 'react';
import Seo from '../components/seo';

import WeddingLayout from '../components/wedding-layout/wedding-layout.component';
import WeddingInvitation from '../components/wedding-invitation/wedding-invitation.component';


const WeddingTemplate = () => (
    <WeddingLayout>
        <Seo title='Wedding Invitation' />
        <WeddingInvitation />
    </WeddingLayout>
);

export default WeddingTemplate;