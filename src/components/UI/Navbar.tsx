import React from 'react';
import './style/navbar.scss';
import {slide as Menu} from 'react-burger-menu'
import CustomMenuIcon from "./CustomMenuIcon";
import OWNRolePrivateComponents from "../../helpers/OWNRolePrivateComponents";
import EMPRolePrivateComponents from "../../helpers/EMPRolePrivateComponents";
import {Link} from "react-router-dom";
import MainButton from "./MainButton";
import useRequest from "../../hooks/useRequest";
import {useAppSelector} from "../../hooks/useRedux";

const Navbar = () => {

    return (
        <Menu customBurgerIcon={<CustomMenuIcon/>} width={"100%"} right disableAutoFocus={true}>
            <div className={"menu"}>
                <Link to={"/user_profile"}>
                    <MainButton>Профиль</MainButton>
                </Link>
                <Link to={"/active_orders"}>
                    <MainButton>Активные заказы</MainButton>
                </Link>
                <OWNRolePrivateComponents>
                    <Link to={"/my_orders"}>
                    <MainButton>Созданные заказы</MainButton>
                    </Link>
                </OWNRolePrivateComponents>
                <EMPRolePrivateComponents>
                    <Link to={"/my_response"}>
                        <MainButton>Мои отклики</MainButton>
                    </Link>
                </EMPRolePrivateComponents>
            </div>
        </Menu>
    );
};

export default Navbar;
