import React from 'react';
import './style/navbar.scss';
import {slide as Menu} from 'react-burger-menu'
import CustomMenuIcon from "./CustomMenuIcon";
import OWNRolePrivateComponents from "../../helpers/OWNRolePrivateComponents";
import EMPRolePrivateComponents from "../../helpers/EMPRolePrivateComponents";
import {Link} from "react-router-dom";
import MainButton from "./MainButton";
import {useAppSelector} from "../../hooks/useRedux";
import useFetchData from "../../hooks/useFetchData";
import useRequest from "../../hooks/useRequest";

const Navbar = () => {
    const {access_token} = useAppSelector((state) => state.loginPage);
    const BASE_URL =
        "http://206.189.61.25:8003/apartx_orders/orders/orders/my_not_done";
    const {data, isLoading, error} = useFetchData(BASE_URL, access_token);
    const {responseData, sendRequest} = useRequest();

    function changeRoleOwn() {
        const article = {
            role: "OWN01"
        }
        const url = "http://206.189.61.25:8002/apartx_auth/auth/users/role/"
        sendRequest(url, article, access_token)
        console.log(responseData)
        localStorage.clear();
    }

    function changeRoleEmp() {
        const article = {
            role: "EMP01"
        }
        const url = "http://206.189.61.25:8002/apartx_auth/auth/users/role/"
        sendRequest(url, article, access_token)
        console.log(responseData)
    }

    return (
        <Menu customBurgerIcon={<CustomMenuIcon/>} width={"100%"} right disableAutoFocus={true}>
            <div className={"menu"}>
                <Link to={"/user_profile"}>
                    <MainButton>Профиль</MainButton>
                </Link>
                <Link to={"/active_orders"}>
                    <MainButton>Активные заказы</MainButton>
                </Link>
                <EMPRolePrivateComponents>
                    <Link to={"/my_orders"}>
                        <MainButton>Созданные заказы</MainButton>
                        <Link to={"/moderation_on_review"}>
                            <MainButton>Отчеты на мои заказы</MainButton>
                        </Link>
                    </Link>
                </EMPRolePrivateComponents>
                <EMPRolePrivateComponents>
                    <Link to={"/my_response"}>
                        <MainButton>Мои отклики</MainButton>
                    </Link>
                </EMPRolePrivateComponents>
                <EMPRolePrivateComponents>
                    <MainButton onClick={changeRoleOwn}>Сменить роль на заказчика</MainButton>
                </EMPRolePrivateComponents>
                <OWNRolePrivateComponents>
                    <MainButton onClick={changeRoleEmp}>Сменить роль на исполнителя</MainButton>
                </OWNRolePrivateComponents>
            </div>
        </Menu>
    );
};

export default Navbar;
