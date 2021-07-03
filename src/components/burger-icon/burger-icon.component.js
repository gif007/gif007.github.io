import React from 'react';
import {
    BurgerIconContainer,
    LongLine,
    ShortLine
} from './burger-icon.styles';

const BurgerIcon = () => (
    <BurgerIconContainer>
        <LongLine top='0' />
        <ShortLine />
        <LongLine top='18px' />
    </BurgerIconContainer>
);

export default BurgerIcon;