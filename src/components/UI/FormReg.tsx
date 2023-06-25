import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useRedux";
import useFormInput from "../../hooks/useFormInput";
import useRequest from "../../hooks/useRequest";
import {setAccess_token, setEmail, setRefresh_token} from "../../redux/reducers/LoginPageSlice";
import MainButton from "./MainButton";

const FormReg = () => {
   const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const BASE_URL_REG = "http://206.189.61.25:8001/apartx_reg/"


    const email = useFormInput<string>('');
    const code = useFormInput<number>(0);
    const pass = useFormInput<string>('');
    const pass_check = useFormInput<string>('');

    const {responseData, error, sendRequest} = useRequest();
    const [isCodeSent, setIsCodeSent] = useState(false); // Состояние для отслеживания отправки кода
    const [isCodeVerified, setIsCodeVerified] = useState(false); // Состояние для отслеживания подтверждения кода
    const [isRegistered, setIsRegistered] = useState(false);


    const [UUID, setUUID] = useState("");

    function getCode() {
        const article = {email: email.value,};
        const url = `${BASE_URL_REG}registration/registration/init/`;
        sendRequest(url, article);
        if (responseData && responseData.status === 0) {
            dispatch(setEmail(email.value))
            setIsCodeSent(true);
            if(responseData && responseData.uuid){
                setUUID(responseData.uuid);
            }

        }
        if (error.response.status === 403 || error.response.status === 401 ) {
            setIsRegistered(true);
        }
        console.log(error)
    }

    function handleSubmitCode() {
        const article = {code: code.value};
        const url = `${BASE_URL_REG}confirm_email/ `;
        setIsCodeVerified(true)
        sendRequest(url, article);
    }

    function handleReg() {
        const article = {password: pass.value};
        const url = `${BASE_URL_REG}${UUID}/finish/  `;

        sendRequest(url, article);
        navigate("/login");
    }

    return (
        <div>
            <h1>Регистрация</h1>
            {!isCodeSent && (
                <form>
                    <label>Введите почту</label>
                    <input type="text" placeholder="@youmail" {...email}/>
                    <MainButton onClick={getCode}>Получить код</MainButton>
                </form>
            )}
            {isCodeSent && (
                <form>
                    <label>Введите полученный код</label>
                    <input type="number" placeholder="12345" {...code}/>
                    <MainButton onClick={handleSubmitCode}>Подтвердить код</MainButton>
                </form>
            )}
            {isCodeVerified && (
                <form>
                    <label>Придумайте пароль</label>
                    <input type="password" placeholder="1234@#" {...pass}/>
                    <label>Повторите пароль</label>
                    <input type="password" placeholder="1234@#" {...pass_check}/>
                    <MainButton onClick={handleReg}>Зарегистрироваться</MainButton>
                </form>
            )}

    </div>
  )
}

export default FormReg
