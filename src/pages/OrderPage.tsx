import React from 'react'
import Header from "../components/UI/Header";
import OrderBlock from "../components/UI/OrderBlock";

const OrderPage = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <h1>Заказы(0)</h1>
                <article>
                   <OrderBlock/>
                </article>
            </main>
        </div>
    )
}

export default OrderPage
