import {useEffect, useState} from "react";
import type {IApiResponse} from "../models/IApiResponse";

const useFetchData = (url: string, jwtToken?: string) => {
    const [data, setData] = useState<IApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const headers: HeadersInit = {};
                if (jwtToken) {
                    headers["Authorization"] = `Bearer ${jwtToken}`;
                }

                const response = await fetch(url, {headers});
                if (!response.ok) {
                    throw new Error("Ошибка получения данных");
                }
                const jsonData: IApiResponse = await response.json();
                setData(jsonData);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Произошла неизвестная ошибка");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, jwtToken]);

    return {data, isLoading, error};
};

export default useFetchData;
