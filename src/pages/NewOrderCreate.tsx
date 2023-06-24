import React, {useState} from 'react'
import Header from "../components/UI/Header";
import useFormInput from "../hooks/useFormInput";
import MainButton from "../components/UI/MainButton";
import ImageUpload from "../components/ImageUpload";
import useRequest from "../hooks/useRequest";
import {useAppSelector} from "../hooks/useRedux";
import useFetchData from "../hooks/useFetchData";


const NewOrderCreate = () => {
    const BASE_URL = "http://206.189.61.25:8003/apartx_orders/"

    const {data, isLoading} = useFetchData(`${BASE_URL}orders/tags`);

    const [tags, setTags] = useState<any>([]);

    function selectTag(e: any[]) {
        const selectedTags = [e, ...tags];
        setTags(selectedTags);
        console.log(tags)
    }

    function clearTag(){
        setTags([]);
    }

    const HeadText = useFormInput<string>("");
    const DescriptionText = useFormInput<string>("")
    const PriceText = useFormInput<number>(0)

    const {responseData, error, sendRequest} = useRequest();
    const {access_token} = useAppSelector((state) => state.loginPage);

    function handleSubmit() {
        const article = {
            title: HeadText.value,
            description: DescriptionText.value,
            price: PriceText.value,
            tags: tags,
            files: uploadedImages,
        };

        const url = `${BASE_URL}orders/orders/`;
        sendRequest(url, article, access_token);
    }


    const [uploadedImages, setUploadedImages] = useState<string[]>([]);


    const handleImageUpload = async (files: any[]) => {
        if (files.length === 0) {
            return;
        }

        const file = files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append("type", "1");

        const url = `${BASE_URL}orders/order_files/`;

        await sendRequest(url, formData, access_token);

        if (responseData !== null && responseData.uuid !== undefined) {
            setUploadedImages((current: string[]) => [...current, responseData.uuid!]);
        }

        console.log(uploadedImages);

        const remainingFiles = files.slice(1);
        await handleImageUpload(remainingFiles);
    };


    return (
        <div>
            <Header></Header>
            <main>
                <h1>Создание нового заказа</h1>
                <article className="new_order_create">
                    <form>
                        <label>Краткое описание заказа</label>
                        <input type="text" {...HeadText} />
                        <label>Детальное описание заказа</label>
                        <textarea
                            {...DescriptionText}
                            className="new_order_create_form_input"
                        />
                        <label>Цена за заказ в тенге</label>
                        <input type="number" {...PriceText} />
                        <ImageUpload onImageUpload={handleImageUpload} maxImages={5}/>
                        <label>Выберите теги к заказу</label>
                        <div className="tags-container">
                            <div className="tags">
                                {data &&
                                    data.results &&
                                    data.results.map((item: any) => (
                                        <div
                                            key={item.uuid}
                                            onClick={() => selectTag(item.uuid)}
                                            className={`tag ${tags.includes(item.uuid) ? 'selected' : ''}`}
                                        >
                                            {item.name}
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <MainButton onClick={clearTag}>Сбросить теги</MainButton>
                        <MainButton onClick={handleSubmit}>Создать заказ</MainButton>
                    </form>
                </article>
            </main>
        </div>
    )
}

export default NewOrderCreate
