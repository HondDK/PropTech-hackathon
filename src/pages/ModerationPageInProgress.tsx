import React from 'react'
import {useAppSelector} from "../hooks/useRedux";
import useFetchData from "../hooks/useFetchData";
import useRequest from "../hooks/useRequest";
import Header from "../components/UI/Header";
import {Link} from "react-router-dom";
import useFormInput from "../hooks/useFormInput";

const ModerationPageInProgress = () => {

    const {access_token} = useAppSelector((state) => state.loginPage);
    const BASE_URL =
        "http://206.189.61.25:8003/apartx_orders/orders/orders/my_in_progress";
    const {data, isLoading, error} = useFetchData(BASE_URL, access_token);
    const {responseData, sendRequest} = useRequest();



    console.log(data)

    return (
        <div>
            <Header></Header>
            <main>
                <article>
                    <h1>Текущие заказы</h1>
                    {data && data.map((item: any) =>
                        <div>
                            <section className={"order_block"} key={item.uuid}>
                                <Link to={`/order_detail/${item.uuid}`}>
                                    <p>{item.title}</p>
                                    <p>{item.price} KZT</p>
                                </Link>
                                <p>Отчет о проделанной работе</p>
                                {
                                    item.reports.map((rep: any) =>
                                        <>
                                            <p>Исполнитель: {rep.user_email}</p>
                                            <div className="order_block_detail_img"
                                                 style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                                                {rep.files.map((url: string) => (
                                                    <img
                                                        key={url}
                                                        alt="Картинка заказов"
                                                        src={url}
                                                        style={{display: 'inline-block', marginRight: '10px'}}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )
                                }
                            </section>
                        </div>
                    )}
                </article>
            </main>
        </div>
    )
}

export default ModerationPageInProgress
