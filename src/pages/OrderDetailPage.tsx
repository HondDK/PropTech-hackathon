import React, {useState} from 'react';
import Header from '../components/UI/Header';
import MainButton from '../components/UI/MainButton';

const OrderDetailPage = () => {
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
                    <section className="order_block_detail">
                        <div style={{flexDirection: 'row'}}>
                            <p className="order_block_head_text">Убрать комнату</p>{' '}
                            <p className="order_block_description_text">15000₸</p>
                        </div>
                        <p className="order_block_description_price">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus esse facere fugiat,
                            fugit,
                            harum id in, nulla numquam odio placeat quibusdam suscipit. Blanditiis culpa debitis et
                            obcaecati
                            officia vero?
                        </p>
                        <div className="order_block_detail_img">
                            <h1>Фотокарточки</h1>
                            <img
                                alt="Картинка заказов"
                                src="https://sun2-19.userapi.com/impg/p-MCLa6zqNxhidVCWGe58QNHOaBxqLraHxRlcQ/RpEMdDXHi2A.jpg?size=1232x819&quality=95&sign=0b856c67f710aa54ae270ed73c0f1850&type=album"
                            />
                            {!showForm && (
                                <MainButton onClick={handleButtonClick}>Откликнуться</MainButton>
                            )}
                        </div>
                    </section>
                    {showForm && (
                        <div className="overlay">
                            <div className="form-container">
                                <form>
                                    <label>Дата когда сможете взяться за работу</label>
                                    <input type={"date"}/>
                                    <label>Cообщение</label>
                                    <input type={"text"}/>
                                    <MainButton onClick={handleButtonClick}>Откликнуться</MainButton>
                                    <img alt={"закрыть"}
                                         src={"https://sun9-10.userapi.com/impg/2Gu9oAhQ6rPXcJMOR7gHxZ6qlIDvAee8lYUtzw/QRB6snIoTDk.jpg?size=1024x1024&quality=96&sign=388c24d86fa488f7d9e0367e6fb21463&type=album"}
                                         onClick={handleCloseForm}
                                        />


                                </form>
                            </div>
                        </div>
                    )}
                </article>

            </main>


        </div>
    );
};

export default OrderDetailPage;
