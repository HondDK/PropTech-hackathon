import React, {useState} from 'react';
import Header from '../components/UI/Header';
import OrderBlock from '../components/UI/OrderBlock';
import useFetchData from '../hooks/useFetchData';
import Tags from '../components/UI/Tags';
import OWNRolePrivateComponents from "../helpers/OWNRolePrivateComponents";
import {useTranslation} from "react-i18next";

const OrdersPage = () => {
    const { t } = useTranslation();

    const BASE_URL_ORDERS = 'http://206.189.61.25:8003/apartx_orders/';
    const {data, error, isLoading} = useFetchData(`${BASE_URL_ORDERS}orders/orders/`);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);




    const filteredItems =
        data && data.results
            ? data.results.filter((item: any) => {
                const titleMatch = item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase());
                const tagsMatch = selectedTags.length === 0 || selectedTags.some((tag) => item.tags.includes(tag));
                return titleMatch && tagsMatch;
            })
            : [];

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div>
            <Header></Header>
            <main>
                <h1>{t('orders.main')}({data?.count || 0})</h1>
                <div className="orders_page_nav">
                    <input
                        className="orders_page_sort"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Поиск заказов"
                    />
                    <img
                        width="45px"
                        height="45px"
                        src="https://sun9-40.userapi.com/impg/8rtJhqrwdvPjVOf9KIunyvcEs9iGNOtb2uGMkQ/aaphmz5HndY.jpg?size=703x691&quality=96&sign=f124d551cdb7a3ca5c2e97c66c8c03e9&type=album"
                        alt="поиск"
                    />
                </div>
                <article>
                    <Tags data={data?.results || []} selectedTags={selectedTags} onTagClick={handleTagClick}/>
                    <OrderBlock data={filteredItems}/>
                </article>
            </main>
        </div>
    );
};

export default OrdersPage;
