import React from 'react'
import {IApiResponse} from "../../models/IApiResponse";

const OrderBlock = ({data}: { data: IApiResponse }) => {
    return (
        <div>
            {data.map((item: any) => (
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
            ))}
        </div>
    );
};


export default OrderBlock
