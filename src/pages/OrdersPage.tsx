import React, {useState} from 'react'
import Header from "../components/UI/Header";
import OrderBlock from "../components/UI/OrderBlock";
import MainButton from "../components/UI/MainButton";

const OrdersPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const [tags, setTags] = useState([]);
    // function selectTag(e: string): void {
    //     const selectedTags: string[] = [e, ...tags];
    //     setTags(selectedTags);
    //     const tagUuids: string = selectedTags.join("&tags=");
    //     fetch(`http://165.232.69.211:8001/freelance/orders/orders?tags=${tagUuids}`)
    //         .then((response: Response) => response.json())
    //         .then((data: any) => setItems(data));
    // }


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
                    <section className={"orders_page_tags"}>
                        <MainButton >
                            Уборка
                        </MainButton>
                        <MainButton>
                            Сантехника
                        </MainButton>
                        <MainButton>
                            Покраска
                        </MainButton>
                    </section>
                    <OrderBlock/>
                    <OrderBlock/>
                    <OrderBlock/>
                </article>
            </main>
        </div>
    )
}

export default OrdersPage
