import React from 'react'
import MainButton from "./MainButton";

const FormLogin = () => {
    return (
        <div>
            <h1>Авторизация</h1>
            <form>
                <label>Введите почту</label>
                <input type="email" placeholder="@youmail"/>
                <MainButton>Получить код</MainButton>
            </form>
            <form>
                <label>Введите полученный код</label>
                <input type="number" placeholder="12345"/>
                <MainButton>Подтвердить код</MainButton>
            </form>
            <form>
                <label>Придумайте пароль</label>
                <input type="password" placeholder="1234@#"/>
                <label>Повторите пароль</label>
                <input type="password" placeholder="1234@#"/>
                <MainButton>Зарегистрироваться</MainButton>
            </form>
            <form>
                <label>Введите пароль</label>
                <input type="number" placeholder="12345"/>
                <MainButton>Войти</MainButton>
            </form>
        </div>
    )
}

export default FormLogin
