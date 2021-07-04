import React from 'react';
import { HeaderWrapper } from './header.styles';
import BurgerIcon from '../burger-icon/burger-icon.component';

const Masthead = () => (
    <HeaderWrapper>
        <span id='top'>Neil Carruthers</span>
        <BurgerIcon />
    </HeaderWrapper>
);

export default Masthead;