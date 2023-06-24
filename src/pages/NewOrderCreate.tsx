import React, {useState} from 'react'
import Header from "../components/UI/Header";
import useFormInput from "../hooks/useFormInput";
import MainButton from "../components/UI/MainButton";
import ImageUpload from "../components/ImageUpload";

const NewOrderCreate = () => {

    const HeadText = useFormInput("");
    const DescriptionText = useFormInput("")
    const PriceText = useFormInput(0)

    function handleSubmit() {

    }

    const [uploadedImages, setUploadedImages] = useState<File[]>([]);
    const handleImageUpload = (files: File[]) => {
        setUploadedImages((prevImages: any) => [...prevImages, ...files]);
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
                        <label>Детальное описание заказа, техническое задание</label>
                        <textarea
                            {...DescriptionText}
                            className="new_order_create_form_input"
                        />
                        <label>Цена за заказ в тенге</label>
                        <input type="number" {...PriceText} />
                        <ImageUpload onImageUpload={handleImageUpload} maxImages={5}/>
                        <MainButton onClick={handleSubmit}>Создать заказ</MainButton>
                    </form>
                </article>
            </main>
        </div>
    )
}

export default NewOrderCreate
