import React, {useState} from 'react'
import Header from "../components/UI/Header";
import OrderBlock from "../components/UI/OrderBlock";

const OrderPage = () => {
    const [searchQuery, setSearchQuery] = useState("");


    // const filteredItems = items.results
    //     ? items.results.filter(
    //         (item) =>
    //             item.title &&
    //             item.title.toLowerCase().includes((searchQuery ?? "").toLowerCase())
    //     )
    //     : [];
    return (
        <div>
            <Header></Header>
            <main>
                <h1>Заказы(0)</h1>
                <div className={"orders_page_nav"}>
                    <input className={"orders_page_sort"} type="text" value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                           placeholder={"Поиск заказов"}/>
                    <img width={"45px"} height={"45px"}
                         src={"https://sun9-40.userapi.com/impg/8rtJhqrwdvPjVOf9KIunyvcEs9iGNOtb2uGMkQ/aaphmz5HndY.jpg?size=703x691&quality=96&sign=f124d551cdb7a3ca5c2e97c66c8c03e9&type=album"}
                         alt={"поиск"}/>
                </div>
                <article>
                    <OrderBlock/>
                    <OrderBlock/>
                    <OrderBlock/>

                </article>
            </main>
        </div>
    )
}

export default OrderPage
