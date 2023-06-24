import React from 'react'
import Header from "../components/UI/Header";
import useFetchData from "../hooks/useFetchData";
import {useAppSelector} from "../hooks/useRedux";
import {Link} from "react-router-dom";

const MyResponse = () => {
    const {access_token, email} = useAppSelector((state) => state.loginPage);
    const BASE_URL = "http://206.189.61.25:8003/apartx_orders/orders/order_responses/my";
    const {data, isLoading, error} = useFetchData(BASE_URL, access_token);

    console.log(data)
    return (
        <div>
            <Header></Header>
            <main>
                <article>
                    <h1>Мои отклики</h1>
                    {data && data.map((item: any) =>
                        <Link to={`/order_detail/${item.order.uuid}`}>
                            <section className={"order_block"} key={item.uuid}>
                                <p>{item.order.title}</p>
                                <p>{item.text}</p>
                                <p>{item.hours}</p>
                            </section>
                        </Link>
                    )}
                </article>
            </main>
        </div>
    )
}

export default MyResponse
