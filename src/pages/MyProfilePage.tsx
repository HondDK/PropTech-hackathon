import React, {useState} from 'react'
import Header from "../components/UI/Header";
import MainButton from "../components/UI/MainButton";
import {useAppSelector} from "../hooks/useRedux";
import useFetchData from "../hooks/useFetchData";
import useRequest from "../hooks/useRequest";
import useFormInput from "../hooks/useFormInput";
import ImageUpload from "../components/ImageUpload";

const MyProfilePage = () => {
    const {access_token} = useAppSelector((state) => state.loginPage);
    const BASE_URL =
        "http://206.189.61.25:8002/apartx_auth/auth/users/info";
    const {data, isLoading, error} = useFetchData(BASE_URL, access_token);
    const {responseData, sendRequest} = useRequest();
    const description = useFormInput<string>('');

    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const [uploadedImages, setUploadedImages] = useState<string[]>([]);

    const handleImageUpload = async (files: any[]) => {
        if (files.length === 0) {
            return;
        }

        const file = files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append("type", "1");

        const url = `http://206.189.61.25:8002/apartx_auth/auth/avatar_files/`;

        await sendRequest(url, formData, access_token);

        if (responseData !== null && responseData.uuid !== undefined) {
            setUploadedImages((current: string[]) => [...current, responseData.uuid!]);
        }

        console.log(uploadedImages);

        const remainingFiles = files.slice(1);
        await handleImageUpload(remainingFiles);
    };
    console.log(data)
    function newDescription() {
        const article = {description: description.value}
        const url = "http://206.189.61.25:8002/apartx_auth/auth/users/set_description/"
        sendRequest(url, article, access_token);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div>
            <Header/>
            <main>
                <article className={"user_profile"}>
                    <section className={"user_profile_text"}>
                        <p className={"user_profile_text_name"}>{data?.username}</p>
                        <p className={"user_profile_text_city"}>г.Караганда</p>
                        <p className={"user_profile_text_description"}>{data?.description}</p>
                    </section>
                    <section className={"user_profile_info"}>
                        <p className={"user_profile_info_rating"}>{data?.rate}</p>
                        <img
                            alt={"фото профиля"}
                            src={data?.avatar}
                        />
                        <ImageUpload onImageUpload={handleImageUpload} maxImages={1}/>
                        <MainButton onClick={handleButtonClick}>
                            Изменить описание профиля
                        </MainButton>
                        {showForm && (
                            <div className="overlay">
                                <div className="form-container">
                                    <form>
                                        <label>Добавьте описание профиля</label>
                                        <input type="text" {...description}/>
                                        <MainButton onClick={() => {
                                            newDescription();
                                            handleCloseForm();
                                        }}>Изменить</MainButton>
                                        <img
                                            alt="закрыть"
                                            src="https://sun9-10.userapi.com/impg/2Gu9oAhQ6rPXcJMOR7gHxZ6qlIDvAee8lYUtzw/QRB6snIoTDk.jpg?size=1024x1024&quality=96&sign=388c24d86fa488f7d9e0367e6fb21463&type=album"
                                            onClick={handleCloseForm}
                                        />
                                    </form>
                                </div>
                            </div>
                        )}
                    </section>
                </article>
            </main>
        </div>
    );
};

export default MyProfilePage;
