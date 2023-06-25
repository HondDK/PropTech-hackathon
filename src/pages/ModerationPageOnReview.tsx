import React, {useState} from 'react';
import {useAppSelector} from '../hooks/useRedux';
import useFetchData from '../hooks/useFetchData';
import useRequest from '../hooks/useRequest';
import Header from '../components/UI/Header';
import {Link, useNavigate} from 'react-router-dom';
import MainButton from '../components/UI/MainButton';
import useFormInput from '../hooks/useFormInput';
import axios from 'axios';
import navbar from "../components/UI/Navbar";


const ModerationPageOnReview = () => {
    const navigate = useNavigate();
    const {access_token} = useAppSelector((state) => state.loginPage);
    const BASE_URL = 'http://206.189.61.25:8003/apartx_orders/orders/orders/my_on_review';
    const {data, isLoading, error} = useFetchData(BASE_URL, access_token);
    const {responseData, sendRequest} = useRequest();
    const rate = useFormInput<number>(5);
    const [usernameEmp, setUsernameEmp] = useState("");
    console.log(data)


    function submitReview(uuid: string) {
       
        const url = `http://206.189.61.25:8003/apartx_orders/orders/orders/${uuid}/finish_order_owner/`;

        const config = {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        };
        axios.get(url, config)
            .then(response => {
                // Обработка ответа от сервера
                console.log(response)
                setUsernameEmp(response.data.user_email)
            })
            .catch(error => {
                // Обработка ошибок
                console.log(error)
            });
    }

    function rateEMP() {
        const article = {
            username: usernameEmp,
            rate: rate.value,
        };

        const url = 'http://206.189.61.25:8002/apartx_auth/profile/profile/rate_employee/';
        sendRequest(url, article, access_token);
        navigate("/orders");
    }


    const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        if (newValue >= 0 && newValue <= 5) {
            rate.onChange(event);
        }
    };

    return (
        <div>
            <Header></Header>
            <main>
                <article>
                    <h1>Отчеты на мои заказы</h1>
                    {data &&
                        data.map((item: any) => (
                            <div>
                                <section className={'order_block'} key={item.uuid}>
                                    <Link to={`/order_detail/${item.uuid}`}>
                                        <p>{item.title}</p>
                                        <p>{item.price} KZT</p>
                                    </Link>
                                    <p>Отчет о проделанной работе</p>
                                    {item.reports.map((rep: any) => (
                                        <>
                                            <p>Исполнитель: {rep.user_email}</p>
                                            <div className="order_block_detail_img"
                                                 style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                                                {rep.files.map((file: any, uuid: string) => (
                                                    <img
                                                        key={uuid}
                                                        alt="Картинка заказов"
                                                        src={file.file}
                                                        style={{display: 'inline-block', marginRight: '10px'}}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    ))}
                                    <input type={'number'} value={rate.value} onChange={handleRateChange}/>
                                    <MainButton onClick={() => {
                                        if (item.uuid) {
                                            submitReview(item.uuid);
                                            rateEMP();
                                        }
                                    }}>Поставить оценку</MainButton>
                                </section>
                            </div>
                        ))}
                </article>
            </main>
        </div>
    );
};

export default ModerationPageOnReview;
