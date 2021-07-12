import React from 'react';

import WeddingLayout from '../components/wedding-layout/wedding-layout.component';
import WeddingInvitation from '../components/wedding-invitation/wedding-invitation.component';


const WeddingTemplate = () => (
    <WeddingLayout>
        <WeddingInvitation />
    </WeddingLayout>
);

export default WeddingTemplate;