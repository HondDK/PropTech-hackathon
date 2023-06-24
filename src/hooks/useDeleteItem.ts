import {useState} from 'react';
import axios, {AxiosResponse} from 'axios';

type Item = {
    url: string;
    name: string;
    id: number,
};

type HookReturnType = {
    items: Item[];
    deleteItem: (id: number, url: string, token: string) => void;
};

type ResponseData = any;

type ErrorType = any;

const useDeleteItem = (): HookReturnType => {
    const [items, setItems] = useState<Item[]>([]);

    const deleteItem = (id: number, url: string, token: string): void => {
        axios
            .delete(url, {
                data: {uuid: id},
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response: AxiosResponse<ResponseData>) => {
                setItems(prevItems => prevItems.filter(item => item.id !== id));
            })
            .catch((error: ErrorType) => {
                console.error('Error deleting item:', error);
            });
    };

    return {
        items,
        deleteItem,
    };
};

export default useDeleteItem;
