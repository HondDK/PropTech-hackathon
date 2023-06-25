import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/UI/Header';
import useFetchData from '../hooks/useFetchData';
import {useAppSelector} from '../hooks/useRedux';
import MainButton from '../components/UI/MainButton';
import useDeleteItem from '../hooks/useDeleteItem';

const MyResponse = () => {
    const {access_token, email} = useAppSelector((state) => state.loginPage);
    const BASE_URL = 'http://206.189.61.25:8003/apartx_orders/orders/order_responses/my';
    const {data, isLoading, error} = useFetchData(BASE_URL, access_token);

    const {items, deleteItem} = useDeleteItem();

    function deleteResponse(id: number) {
        const url = `http://206.189.61.25:8003/apartx_orders/orders/order_responses/${id}`;
        const token = access_token; // Замените на ваш JWT-токен

        deleteItem(id, url, token);
    }

    return (
        <div>
            <Header></Header>
            <main>
                <article>
                    <h1>Мои отклики</h1>
                    {data &&
                        data.map((item: any) => (
                            <section className={'order_block'} key={item.uuid}>
                                <Link to={`/order_detail/${item.order?.uuid}`}>
                                    <p>{item.order?.title}</p>
                                    <p>{item.text}</p>
                                    <p>{item.hours}</p>
                                </Link>
                                <MainButton onClick={() => deleteResponse(item.uuid)}>Удалить отклик</MainButton>
                            </section>
                        ))}
                </article>
            </main>
        </div>
    );
};

export default MyResponse;
