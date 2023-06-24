import React from 'react';
import './style/navbar.scss';
import {slide as Menu} from 'react-burger-menu'
import CustomMenuIcon from "./CustomMenuIcon";
import RolePrivateComponents from "../../helpers/RolePrivateComponents";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Menu customBurgerIcon={<CustomMenuIcon/>} width={"100%"} right disableAutoFocus={true}>
            <a>Профиль</a>
            <hr/>
            <a>Принятые заказы</a>
            <hr/>
            <a>Созданные заказы</a>
            <hr/>
            <RolePrivateComponents>
                <Link to={"/my_response"}>
                    <a>Мои отклики</a>
                </Link>
            </RolePrivateComponents>

        </Menu>
    );
};

export default Navbar;
