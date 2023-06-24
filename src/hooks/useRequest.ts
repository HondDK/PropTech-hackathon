import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {ILoginPage} from "../models/ILoginPage";

interface FormData {
    append?(name: string, value: any): void;
}

interface Article extends FormData{
    email?: string;
    username?: string,
    password?: string,
    code?: number,
    access?: string,
    refresh?: string,
    title?: string,
    description?: string,
    price?: number
    tags?: string[],
    files?: string[],
    type?: number,
    uuid?: string,
    file?: any,
    formData?: {
        file: any;
        type: number;
    };

}

interface ResponseData extends ILoginPage {
    status: number,
    access: string,
    refresh: string,
}

type ErrorType = any;

const useRequest = () => {
    const [responseData, setResponseData] = useState<ResponseData | null>(null);
    const [error, setError] = useState<ErrorType | null>(null);

    const sendRequest = (url: string, article: Article, token?: string) => {
        axios
            .post(url, article, {
                headers: {
                    Authorization: `Bearer ${token}` // Добавление JWT-токена в заголовок запроса
                }
            })
            .then((response: AxiosResponse<ResponseData>) => {
                setResponseData(response.data);
            })
            .catch((error: ErrorType) => {
                setError(error);
            });
    };

    return { responseData, error, sendRequest };
};

export default useRequest;