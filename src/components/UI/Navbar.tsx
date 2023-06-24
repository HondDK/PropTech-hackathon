import React from 'react';
import './style/navbar.scss';
import {slide as Menu} from 'react-burger-menu'
import CustomMenuIcon from "./CustomMenuIcon";

const Navbar = () => {
    return (
        <Menu customBurgerIcon={<CustomMenuIcon/>} width={"100%"} right>
            <a>Профиль</a>
            <hr/>
            <a>Профиль</a>
            <hr/>
            <a>Профиль</a>
            <hr/>
        </Menu>
    );
};

export default Navbar;
