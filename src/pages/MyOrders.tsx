import React from 'react'
import Header from "../components/UI/Header";
import useFetchData from "../hooks/useFetchData";
import {useAppSelector} from "../hooks/useRedux";
import {Link} from "react-router-dom";
import MainButton from "../components/UI/MainButton";
import useDeleteItem from "../hooks/useDeleteItem";

const MyOrders = () => {
    const {access_token, email} = useAppSelector((state) => state.loginPage);
    const BASE_URL = "http://206.189.61.25:8003/apartx_orders/orders/orders/my";
    const {data, isLoading, error} = useFetchData(BASE_URL, access_token);

    const {items, deleteItem} = useDeleteItem();


    function deleteOrder(id: number) {
        const url = `http://206.189.61.25:8003/apartx_orders/orders/orders/${id}`;
        const token = access_token; // Замените на ваш JWT-токен

        deleteItem(id, url, token);
    }


    return (
        <div>
            <Header></Header>
            <main>
                <article>
                    <h1>Мои Заказы</h1>
                    {data && data.map((item: any) =>
                        <section className={"order_block"} key={item.uuid}>
                            <Link to={`/order_detail/${item.uuid}`}>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <div>{item.is_employee_selected && (<p>Заказ принят!</p>)}</div>
                                <div>{!item.is_employee_selected && (<p>Заказ не принят</p>)}</div>
                            </Link>
                            <MainButton onClick={() => deleteOrder(item.uuid)}>Удалить заказ</MainButton>
                        </section>
                    )}
                </article>
            </main>
        </div>
    )
}

export default MyOrders
