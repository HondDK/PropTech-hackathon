import React, {useState} from 'react'
import {useAppSelector} from "../hooks/useRedux";
import useFetchData from "../hooks/useFetchData";
import useRequest from "../hooks/useRequest";
import Header from "../components/UI/Header";
import {Link} from "react-router-dom";
import MainButton from "../components/UI/MainButton";
import ImageUpload from "../components/ImageUpload";

const ActiveOrders = () => {
  const {access_token} = useAppSelector((state) => state.loginPage);
  const BASE_URL =
      "http://206.189.61.25:8003/apartx_orders/orders/orders/my_not_done";
  const {data, isLoading, error} = useFetchData(BASE_URL, access_token);
  const {responseData, sendRequest} = useRequest();

  console.log(data)

  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = async (files: any[]) => {
    if (files.length === 0) {
      return;
    }

    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append("type", "1");

    const url = `http://206.189.61.25:8003/apartx_orders/orders/finished_order_report_files/`;

    await sendRequest(url, formData, access_token);

    if (responseData !== null && responseData.uuid !== undefined) {
      setUploadedImages((current: string[]) => [...current, responseData.uuid!]);
    }

    console.log(uploadedImages);

    const remainingFiles = files.slice(1);
    await handleImageUpload(remainingFiles);
  };


  const [orderUUID, setOrderUUID] = useState("");

  function newReport() {

    const article = {
      order: orderUUID,
      files: uploadedImages,
    }
    const url = "http://206.189.61.25:8003/apartx_orders/orders/finished_order_reports/"

    sendRequest(url, article, access_token)


  }

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };


  return (
      <div>
        <Header></Header>
        <main>
          <article>
            <h1>Мои Заказы</h1>
            {data && data.map((item: any) =>
                <div>
                  <section className={"order_block"} key={item.uuid}>
                    <Link to={`/order_detail/${item.uuid}`}>
                      <p>{item.title}</p>
                      <p>{item.price} KZT</p>
                    </Link>
                    <MainButton onClick={() => {
                      handleButtonClick();
                      setOrderUUID(item.uuid)
                    }}>Сделать отчет</MainButton>
                  </section>
                  <section>
                    {showForm && (
                        <div className="overlay">
                          <div className="form-container">
                            <form>
                              <label>Добавьте отчет к заказу</label>
                              <ImageUpload onImageUpload={handleImageUpload} maxImages={5}/>
                              <img
                                  alt="закрыть"
                                  src="https://sun9-10.userapi.com/impg/2Gu9oAhQ6rPXcJMOR7gHxZ6qlIDvAee8lYUtzw/QRB6snIoTDk.jpg?size=1024x1024&quality=96&sign=388c24d86fa488f7d9e0367e6fb21463&type=album"
                                  onClick={handleCloseForm}
                              />
                              <MainButton onClick={newReport}>Опубликовать отчет</MainButton>
                            </form>

                          </div>
                        </div>
                    )}
                  </section>
                </div>
            )}
          </article>
        </main>
      </div>
  )
}

export default ActiveOrders
