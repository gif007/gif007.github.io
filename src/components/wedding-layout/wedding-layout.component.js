import React from 'react';
import '../reset.css';
import Seo from '../seo';

import { LayoutWrapper } from './wedding-layout.styles';
import Peony from '../../images/wedding/peony.png';


const WeddingLayout = ({children}) => (
    <LayoutWrapper bg={Peony}>
        <Seo title='Wedding Invitation' />
        {children}
    </LayoutWrapper>
);

export default WeddingLayout;