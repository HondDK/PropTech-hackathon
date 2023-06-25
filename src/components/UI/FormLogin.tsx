import React from 'react'
import MainButton from "./MainButton";
import useFormInput from "../../hooks/useFormInput"
import useRequest from "../../hooks/useRequest";
import {useAppDispatch} from "../../hooks/useRedux";
import {setAccess_token, setEmail, setRefresh_token} from "../../redux/reducers/LoginPageSlice";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const FormLogin = () => {
    const {t} = useTranslation();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const BASE_URL_REG = "http://206.189.61.25:8001/apartx_reg/"
    const BASE_URL_AUTH = "http://206.189.61.25:8002/apartx_auth/"

    const email = useFormInput<string>('');

    const pass = useFormInput<string>('');


    const {responseData, error, sendRequest} = useRequest();


    const handleLogin = async () => {
        const article = {
            username: email.value,
            password: pass.value,
        }
        const url = `${BASE_URL_AUTH}token/`;
        sendRequest(url, article);
        dispatch(setEmail(email.value))
        if (responseData !== null) {
            dispatch(setAccess_token(responseData.access))
            dispatch(setRefresh_token(responseData.refresh))
            navigate("/orders");
        }

        console.log(responseData)
    };


    return (
        <div>
            <h1>{t('auth.name')}</h1>
            <form>
                <label>{t('auth.email')}</label>
                <input type="text" placeholder="@youmail" {...email}/>
                <label>{t('auth.enter_password')}</label>
                <input type="password" placeholder="12345" {...pass}/>
                <MainButton onClick={handleLogin}>{t('auth.enter')}</MainButton>
            </form>
            <div className={"reg_btn"}>
                <Link to={"/reg"}>
                    <MainButton>{t('auth.register')}</MainButton>
                </Link>
            </div>
        </div>
    )
}

export default FormLogin