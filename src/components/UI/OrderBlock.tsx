import React from 'react'
import {IApiResponse} from "../../models/IApiResponse";
import {Link, useParams} from "react-router-dom";

const OrderBlock = ({data}: { data: IApiResponse }) => {

    return (
        <div>
            {data.map((item: any) => (
                <Link to={`/order_detail/${item.uuid}`}>
                    <section className="order_block" key={item.uuid}>
                        <p className="order_block_head_text">{item.title}</p>
                        <div className="tags">
                            {item.tags.map((tag: any) => (
                                <div key={tag.uuid} className="tag">
                                    {tag.name}
                                </div>
                            ))}
                        </div>
                        <p className="order_block_description_price">{item.price}₸</p>
                    </section>
                </Link>
            ))}

        </div>
    );
};


export default OrderBlock
