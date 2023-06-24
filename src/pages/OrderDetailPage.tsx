import React, {useState} from 'react'
import Header from "../components/UI/Header";
import MainButton from "../components/UI/MainButton";

const OrderDetailPage = () => {



    return (
        <div>
            <Header></Header>
            <h1>Детали заказа</h1>
            <main>

                <article>

                    <section className={"order_block_detail"}>
                        <div style={{flexDirection: "row"}}>
                            <p className={"order_block_head_text"}>Убрать комнату</p> <p
                            className={"order_block_description_text"}>15000₸</p>
                        </div>
                        <p className={"order_block_description_price"}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing
                            elit. Amet ducimus esse facere fugiat, fugit,
                            harum id in, nulla numquam odio placeat quibusdam suscipit. Blanditiis culpa debitis et
                            obcaecati officia vero?</p>
                        <h1>
                            Фотокарточки
                        </h1>
                        <img alt="Картинка заказов" src={""}/>
                        <MainButton>Принять заказ</MainButton>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default OrderDetailPage
