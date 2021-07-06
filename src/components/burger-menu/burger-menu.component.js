import React from 'react';
import {
    BurgerMenuContainer,
    Row
} from './burger-menu.styles';


const BurgerMenu = () => (
    <BurgerMenuContainer>
        <Row><span style={{color: 'red', fontWeight: 700}}>HOME</span></Row>
        <Row><a href='#about'>ABOUT</a></Row>
        <Row><a href='#portfolio'>PORTFOLIO</a></Row>
        <Row><a href='#contact'>CONTACT</a></Row>
    </BurgerMenuContainer>
);

export default BurgerMenu;