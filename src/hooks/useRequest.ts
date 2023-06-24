import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {ILoginPage} from "../models/ILoginPage";

interface Article {
    email?: string;
    username?: string,
    password?: string,
    code?: number,
    access?: string,
    refresh?: string,
}

interface ResponseData extends ILoginPage {
    status: number,
    access: string,
    refresh: string,
}

type ErrorType = any; // Здесь необходимо указать тип данных для ошибки

const useRequest = () => {
    const [responseData, setResponseData] = useState<ResponseData | null>(null);
    const [error, setError] = useState<ErrorType | null>(null);

    const sendRequest = (url: string, article: Article) => {
        axios
            .post(url, article)
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
