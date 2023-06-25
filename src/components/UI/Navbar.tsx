import React from 'react';
import './style/navbar.scss';
import {slide as Menu} from 'react-burger-menu'
import CustomMenuIcon from "./CustomMenuIcon";
import OWNRolePrivateComponents from "../../helpers/OWNRolePrivateComponents";
import EMPRolePrivateComponents from "../../helpers/EMPRolePrivateComponents";
import {Link, useNavigate} from "react-router-dom";
import MainButton from "./MainButton";
import {useAppSelector} from "../../hooks/useRedux";
import useFetchData from "../../hooks/useFetchData";
import useRequest from "../../hooks/useRequest";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "../../i18/LanguageSwitcher";

const Navbar = () => {
    const navigate = useNavigate();

    const {t} = useTranslation();
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
        localStorage.clear()
        navigate("/login")

    }

    function changeRoleEmp() {
        const article = {
            role: "EMP01"
        }
        const url = "http://206.189.61.25:8002/apartx_auth/auth/users/role/"
        sendRequest(url, article, access_token)
        console.log(responseData)
        localStorage.clear()
        navigate("/login")

    }

    function logout() {
        localStorage.clear()
        window.location.reload();
        navigate("/login")
    }

    return (
        <Menu customBurgerIcon={<CustomMenuIcon/>} width={"100%"} right disableAutoFocus={true}>
            <div className={"menu"}>
                <Link to={"/user_profile"}>
                    <MainButton>Профиль</MainButton>
                </Link>
                <OWNRolePrivateComponents>
                    <Link to={"/new_order_create"}>
                        <MainButton>Создать новый заказ</MainButton>
                    </Link>
                    <Link to={"/my_orders"}>
                        <MainButton>{t('profile.created_orders')}</MainButton>
                    </Link>
                    <Link to={"/moderation_on_review"}>
                        <MainButton>Отчеты на мои заказы</MainButton>
                    </Link>
                    <Link to={"/moderation_in_progress"}>
                        <MainButton>Текущие заказы</MainButton>
                    </Link>
                </OWNRolePrivateComponents>
                <EMPRolePrivateComponents>
                    <Link to={"/active_orders"}>
                        <MainButton>Текущие заказы</MainButton>
                    </Link>
                    <Link to={"/my_response"}>
                        <MainButton>{t('profile.my_responses')}</MainButton>
                    </Link>
                </EMPRolePrivateComponents>
                <EMPRolePrivateComponents>
                    <MainButton onClick={changeRoleOwn}>Сменить роль на заказчика</MainButton>
                </EMPRolePrivateComponents>
                <MainButton onClick={changeRoleEmp}>Сменить роль на исполнителя</MainButton>
                <LanguageSwitcher></LanguageSwitcher>
                <MainButton onClick={logout}>Выйти из профиля</MainButton>
                <Link to={"/rating_users"}>
                    <MainButton>Топ пользователей</MainButton>
                </Link>
            </div>
        </Menu>
    )
        ;
};

export default Navbar;
