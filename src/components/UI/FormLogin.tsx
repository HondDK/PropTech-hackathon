import React from 'react'
import MainButton from "./MainButton";
import useFormInput from "../../hooks/useFormInput"
import useRequest from "../../hooks/useRequest";
import {useAppDispatch} from "../../hooks/useRedux";
import {setAccess_token, setEmail, setRefresh_token} from "../../redux/reducers/LoginPageSlice";
import {Link, useNavigate} from "react-router-dom";

const FormLogin = () => {
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
            <h1>Авторизация</h1>

            <form>
                <label>Введите почту</label>
                <input type="text" placeholder="@youmail" {...email}/>
                <label>Введите пароль</label>
                <input type="password" placeholder="12345" {...pass}/>
                <MainButton onClick={handleLogin}>Войти</MainButton>
            </form>
            <Link to={"/reg"}>
                <MainButton>Регистрация</MainButton>
            </Link>
        </div>
    )
}

export default FormLogin