import React from 'react';
import {
    BurgerMenuContainer,
    Row
} from './burger-menu.styles';


const BurgerMenu = ({fn, value}) => {
    const fireFn = () => fn(!value);

    return (
    <BurgerMenuContainer>
        <Row><a onClick={fireFn} href='/#top'>HOME</a></Row>
        <Row><a onClick={fireFn} href='/#about'>ABOUT</a></Row>
        <Row><a onClick={fireFn} href='/#blog'>BLOG</a></Row>
        <Row><a onClick={fireFn} href='/#portfolio'>PORTFOLIO</a></Row>
        <Row><a onClick={fireFn} href='/#contact'>CONTACT</a></Row>
    </BurgerMenuContainer>
)};

export default BurgerMenu;