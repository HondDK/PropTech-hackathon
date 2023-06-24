import React, {useState} from 'react';
import Header from '../components/UI/Header';
import MainButton from '../components/UI/MainButton';
import {useParams} from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const OrderDetailPage = () => {
    const {uuid} = useParams();
    const BASE_URL = 'http://206.189.61.25:8003/apartx_orders/';

    const {data, error, isLoading} = useFetchData(`${BASE_URL}orders/orders/${uuid}`);

    const [showForm, setShowForm] = useState(false);
    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div>
            <Header/>
            <h1>Детали заказа</h1>
            <main>
                <article>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {data && (
                        <section className="order_block_detail">
                            <div style={{flexDirection: 'row'}}>
                                <p className="order_block_head_text">{data.title}</p>
                                <p className="order_block_description_text">{data.price}₸</p>
                            </div>
                            <p className="order_block_description_price">{data.description}</p>
                            {data.files && data.files.length > 0 && (
                                <>
                                    <h1>Фотокарточки</h1>
                                    <div className="order_block_detail_img"
                                         style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                                        {data.files.map((file, index) => (
                                            <img
                                                key={index}
                                                alt="Картинка заказов"
                                                src={file.file}
                                                style={{display: 'inline-block', marginRight: '10px'}}
                                            />
                                        ))}
                                    </div>
                                    {!showForm && (
                                        <MainButton onClick={handleButtonClick}>Откликнуться</MainButton>
                                    )}
                                </>
                            )}
                        </section>
                    )}
                    {showForm && (
                        <div className="overlay">
                            <div className="form-container">
                                <form>
                                    <label>Дата когда сможете взяться за работу</label>
                                    <input type="date"/>
                                    <label>Cообщение</label>
                                    <input type="text"/>
                                    <MainButton onClick={handleButtonClick}>Откликнуться</MainButton>
                                    <img
                                        alt="закрыть"
                                        src="https://sun9-10.userapi.com/impg/2Gu9oAhQ6rPXcJMOR7gHxZ6qlIDvAee8lYUtzw/QRB6snIoTDk.jpg?size=1024x1024&quality=96&sign=388c24d86fa488f7d9e0367e6fb21463&type=album"
                                        onClick={handleCloseForm}
                                    />
                                </form>
                            </div>
                        </div>
                    )}
                    <h2>Отклики на заказ</h2>
                    {data && data.responses && data.responses.map((item: any) => (
                        <section className="order_detail_response">
                            <p>{item.user_email}</p>
                            <p>{item.text}</p>
                            <p>{item.suggest_price}₸</p>
                        </section>
                    ))}
                </article>
            </main>
        </div>
    );
};

export default OrderDetailPage;
