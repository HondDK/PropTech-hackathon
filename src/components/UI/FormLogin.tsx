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
                <label>Введите полученный код</label>
                <input type="password" placeholder="12345"/>
                <MainButton type="submit">Зайти в аккаунт</MainButton>
            </form>
        </div>
    )
}

export default FormLogin
