import React from 'react'
import Header from "../components/UI/Header";
import MainButton from "../components/UI/MainButton";
import {useAppSelector} from "../hooks/useRedux";
import useFetchData from "../hooks/useFetchData";

const UserProfilePage = () => {
    const {access_token, email} = useAppSelector((state) => state.loginPage);
    const BASE_URL = "http://206.189.61.25:8003/apartx_orders/orders/order_responses/my";
    const {data, isLoading, error} = useFetchData(BASE_URL, access_token);


    return (
        <div>
            <Header></Header>
            <main>
                <article className={"user_profile"}>
                    <section className={"user_profile_text"}>
                        <p className={"user_profile_text_name"}>Алена Боброва</p>
                        <p className={"user_profile_text_city"}>г.Караганда</p>
                        <p className={"user_profile_text_description"}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ab architecto dignissimos maxime nobis quam tempore temporibus voluptates.
                            Ad amet dicta dolorem dolores, enim fugit in iste maxime pariatur qui temporibus.</p>
                    </section>
                    <section className={"user_profile_info"}>
                        <p className={"user_profile_info_rating"}>5.0</p>
                        <img alt={"фото профиля"}
                             src={"https://sun2-22.userapi.com/impg/CI64jvnwDTSWMBs4uGDdpHTCupr_4ExSJ7fzyg/qcVtirkedKo.jpg?size=524x486&quality=96&sign=4b45de8909c0a1783258f03c63368780&type=album"}/>
                        <MainButton>Загрузить фото</MainButton>
                        <MainButton>Изменить описание профиля</MainButton>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default UserProfilePage
