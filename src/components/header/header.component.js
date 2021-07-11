import React, { useState } from 'react';
import { HeaderWrapper } from './header.styles';

import BurgerIcon from '../burger-icon/burger-icon.component';
import BurgerMenu from '../burger-menu/burger-menu.component';

import NameLogoLarge from '../../images/index/logo-name-250w.png';
import NameLogoSmall from '../../images/index/logo-name-125w.png';

const Masthead = () => {
    const [hidden, setHidden] = useState(true);
    
    return (
    <HeaderWrapper>
        <a href='/' id='top'>
            <picture>
                <source media="(max-width: 800px)" srcset={NameLogoSmall} />
                <source media="(min-width: 801px)" srcset={NameLogoLarge} />
                <img src={NameLogoLarge} alt='Neil Carruthers'/>
            </picture>
        </a>
        <BurgerIcon fn={setHidden} value={hidden} />
            {
                hidden ? (
                    null
                ) : (
                    <BurgerMenu fn={setHidden} value={hidden} />
                )
            }
    </HeaderWrapper>
)};

export default Masthead;