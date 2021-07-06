import React from 'react';

import {
    BurgerIconContainer,
    LongLine,
    ShortLine
} from './burger-icon.styles';

const BurgerIcon = ({fn, value}) => {
    const fireFn = () => fn(!value);
    
    return (
        <BurgerIconContainer onClick={fireFn} type='button'>
            <LongLine top='0' />
            <ShortLine />
            <LongLine top='18px' />
        </BurgerIconContainer>
    )
};

export default BurgerIcon;