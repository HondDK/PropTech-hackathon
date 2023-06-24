import React from 'react';
import './style/navbar.scss';
import {slide as Menu} from 'react-burger-menu'
import CustomMenuIcon from "./CustomMenuIcon";

const Navbar = () => {
    return (
        <Menu customBurgerIcon={<CustomMenuIcon/>} width={"100%"} right disableAutoFocus={true}>
            <a>Профиль</a>
            <hr/>
            <a>Принятые заказы</a>
            <hr/>
            <a>Созданные заказы</a>
            <hr/>
        </Menu>
    );
};

export default Navbar;
