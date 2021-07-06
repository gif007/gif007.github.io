import React from 'react';
import {
    BurgerIconContainer,
    LongLine,
    ShortLine
} from './burger-icon.styles';

const BurgerIcon = ({fn, value}) => (
    <div onClick={() => fn(!value)}>
        <BurgerIconContainer>
            <LongLine top='0' />
            <ShortLine />
            <LongLine top='18px' />
        </BurgerIconContainer>
    </div>
    
);

export default BurgerIcon;