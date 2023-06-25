import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useRedux';
import useFormInput from '../../hooks/useFormInput';
import useRequest from '../../hooks/useRequest';
import {setEmail} from '../../redux/reducers/LoginPageSlice';
import MainButton from './MainButton';

const FormReg = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const BASE_URL_REG = 'http://206.189.61.25:8001/apartx_reg/';

    const email = useFormInput('');
    const code = useFormInput('');
    const pass = useFormInput('');
    const pass_check = useFormInput('');

    const {responseData, error, sendRequest} = useRequest();
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isCodeVerified, setIsCodeVerified] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [UUID, setUUID] = useState('');

    function getCode() {
        const article = {email: email.value};
        const url = `${BASE_URL_REG}registration/registration/init/`;
        sendRequest(url, article);

        dispatch(setEmail(email.value));
        setIsCodeSent(true);
    }

    function handleSubmitCode() {
        const article = {code: code.value};
        const url = `${BASE_URL_REG}registration/registration/${UUID}/confirm_email/`;
        sendRequest(url, article);
        setIsCodeVerified(true);
    }

    function handleReg() {
        const article = {password: pass.value};
        const url = `${BASE_URL_REG}registration/registration/${UUID}/finish/`;

        sendRequest(url, article);
        navigate('/login');
    }

    useEffect(() => {
        if (error && error.response && error.response.status === 403) {
            setIsRegistered(true);
        }
    }, [error]);

    useEffect(() => {
        if (isRegistered) navigate('/login');
    }, [isRegistered, navigate]);

    useEffect(() => {
        if (responseData && responseData.uuid) {
            setUUID(responseData.uuid);
        }
    }, [responseData]);

    return (
        <div>
            <h1>Регистрация</h1>
            {!isCodeSent && (
                <form>
                    <label>Введите почту</label>
                    <input type="email" placeholder="@youmail" {...email} />
                    <MainButton onClick={getCode}>Получить код</MainButton>
                </form>
            )}
            {isCodeSent && !isCodeVerified && (
                <form>
                    <label>Введите полученный код</label>
                    <input type="number" placeholder="12345" {...code} />
                    <MainButton onClick={handleSubmitCode}>Подтвердить код</MainButton>
                </form>
            )}
            {isCodeVerified && (
                <form>
                    <label>Придумайте пароль</label>
                    <input type="password" placeholder="1234@#" {...pass} />
                    <label>Повторите пароль</label>
                    <input type="password" placeholder="1234@#" {...pass_check} />
                    <MainButton onClick={handleReg}>Зарегистрироваться</MainButton>
                </form>
            )}
        </div>
    );
};

export default FormReg;
