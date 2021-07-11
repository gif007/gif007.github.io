import React from 'react';
import '../reset.css';
import { LayoutWrapper } from './wedding-layout.styles';
import Peony from '../../images/stolen-peony.png';


const WeddingLayout = ({children}) => (
    <LayoutWrapper bg={Peony}>
        {children}
    </LayoutWrapper>
);

export default WeddingLayout;