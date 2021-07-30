import React from 'react';
import { Link } from 'gatsby';

import {
    BurgerMenuContainer,
    Row
} from './burger-menu.styles';


const BurgerMenu = ({fn, value}) => {
    const fireFn = () => {
        fn(!value);
    };

    return (
    <BurgerMenuContainer>
        <Row><Link onClick={fireFn} to='/#top'>HOME</Link></Row>
        <Row><Link onClick={fireFn} to='/#about'>ABOUT</Link></Row>
        <Row><Link onClick={fireFn} to='/#blog'>BLOG</Link></Row>
        <Row><Link onClick={fireFn} to='/#portfolio'>PORTFOLIO</Link></Row>
        <Row><Link onClick={fireFn} to='/#contact'>CONTACT</Link></Row>
    </BurgerMenuContainer>
)};

export default BurgerMenu;