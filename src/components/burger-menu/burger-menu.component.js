import React from 'react';
import {
    BurgerMenuContainer,
    Row
} from './burger-menu.styles';


const BurgerMenu = ({fn, value}) => {
    const fireFn = () => fn(!value);

    return (
    <BurgerMenuContainer>
        <Row><span style={{color: 'red', fontWeight: 700}}>HOME</span></Row>
        <Row><a onClick={fireFn} href='#about'>ABOUT</a></Row>
        <Row><a onClick={fireFn} href='#portfolio'>PORTFOLIO</a></Row>
        <Row><a onClick={fireFn} href='#contact'>CONTACT</a></Row>
    </BurgerMenuContainer>
)};

export default BurgerMenu;